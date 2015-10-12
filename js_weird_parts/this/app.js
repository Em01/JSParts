console.log(this); //global object

var c = {
	name: 'the c object',
	log: function() {
		var self = this;

		this.name = 'Updated c object';
		console.log(self);

		var setname = function(newname) {
			self.name = newname; 
		}
		setname('Updated again The c object');
		console.log(self);
	}
}

c.log();