function Media(title, song) {
	this.title = title;
	this.song = song;
	this.isPlaying = false;
}

Media.prototype.play = function() {
	this.isPlaying = true;
};

Media.prototype.stop = function() {
	this.isPlaying = false;
};