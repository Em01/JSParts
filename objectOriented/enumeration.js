aquarium.countFish = function(){
	var numFish = 0;
	for ( key in aquarium ) {
		if ( aquarium[key].type == "fish") {
			numFish++;
		}
	}
	return numFish;
};