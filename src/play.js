const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Speaker = require('speaker');

function play(audioPlayer) {
    // Verificar si el archivo existe antes de intentar reproducirlo
    fs.access(audioPlayer.filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Error: No se pudo encontrar el archivo especificado: ${audioPlayer.filePath}`);
            return; // Salir de la función si el archivo no existe
        }

        // Si el archivo existe, proceder con la reproducción
        audioPlayer.stream = fs.createReadStream(audioPlayer.filePath);
        audioPlayer.speaker = new Speaker();

        ffmpeg(audioPlayer.stream)
            .audioCodec('pcm_s16le')
            .format('wav')
            .pipe(audioPlayer.speaker);

        audioPlayer.speaker.on('open', () => {
            audioPlayer.isPlaying = true;
            audioPlayer.startTime = Date.now();
        });

        audioPlayer.speaker.on('close', () => {
            audioPlayer.isPlaying = false;
        });
    });
}

module.exports = play;
