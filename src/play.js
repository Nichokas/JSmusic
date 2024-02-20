const ffmpeg = require('fluent-ffmpeg');
const Speaker = require('speaker');
const fs = require('fs');

function play(audioPlayer) {
    if (audioPlayer.isPlaying) return;

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
}

module.exports = play;
