function Song(title, artist, song) {
	this.title = title;
	this.song = song;
	this.artist = artist;
	this.isPlaying = false;
}

Song.prototype.play = function() {
	this.isPlaying = true;
};

Song.prototype.stop = function() {
	this.isPlaying = false;
};

Song.prototype.toHTML = function() {
	var htmlString = '<li>';
	if(this.isPlaying) {
		htmlString += ' class="current" ';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' - ';
	htmlString += this.artist;
	htmlString += '<span class="duration">';
	htmlString += this.duration;
	htmlString += '</span></li>';
		return htmlString;
};