console.log(this); //global object

var c = {
	name: 'the c object',
	log: function() {
		this.name = 'Updated c object';
		console.log(this);

		var setname = function(newname) {
			this.name = newname; //adds name property on the global object
		}
		setname('Updated again The c object');
		console.log(this);
	}
}

c.log();