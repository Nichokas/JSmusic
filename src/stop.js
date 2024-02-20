function stop(audioPlayer) {
    // Verifica si hay una reproducción en curso
    if (audioPlayer.isPlaying && audioPlayer.speaker) {
        // Finaliza el stream hacia el dispositivo de salida (speaker)
        audioPlayer.speaker.end();
        audioPlayer.isPlaying = false;
        console.log('Reproducción detenida.');
    }
}

module.exports = stop;
