const play = require('./play');
const stop = require('./stop');
//const pause = require('./pause');
//const resume = require('./resume');
//const getElapsedTime = require('./getElapsedTime');

class AudioPlayer {
    constructor(filePath) {
        this.filePath = filePath;
        this.speaker = null;
        this.stream = null;
        this.isPlaying = false;
        this.startTime = null;
        this.pauseTime = null;
    }
}

AudioPlayer.prototype.play = function() { play(this); };
AudioPlayer.prototype.stop = function() { stop(this); };
//AudioPlayer.prototype.pause = function() { pause(this); };
//AudioPlayer.prototype.resume = function() { resume(this); };
//AudioPlayer.prototype.getElapsedTime = function() { return getElapsedTime(this); };

module.exports = AudioPlayer;
