function Restaurant(info) {
	this.id = info.id;
	this.name = info.name;
	this.location = info.location;
	this.foodItem = info.foodItem;
	this.note = info.note;
}
// the collection of all Restaurant instances managed by the app in the form of an entity table
Restaurant.instances = {};
// helper function
//convert string of individual restaurant in db to an Object
Restaurant.prototype.convertToObj = function(restPointerId) {
	var restaurant = new Restaurant(restPointerId);
	retrun restaurant;
};
// fectch persisting data from localStorage API
Restaurant.prototype.loadAll = function() {
	var keys =[], restaurantsString = '', restaurants = {}, i = 0;
	
	try {
		if(localStorage['restaurants']) {
			restaurantsString = localStorage['restaurants'];
		}
	} catch(error) {
		console.log('Error when reading from localStorage: ' + error);
	}

	if(restaurantsString) {
		restaurants = JSON.parse(restaurantsString);
		// returns an array of keys
		keys = Object.keys(restaurants);
		for(i = 0; i<keys.length; i++) {
			// or Restaurant.instances[keys[i]]= json.parse(restaurants[keys[i]])??
			Restaurant.instances[keys[i]] = Restaurant.convertToObj(restaurants[key]);
		}

	}
	for(i=0; i< keys.length)
};
// save data to the Browser localStorage
Restaurant.prototype.saveAll = function() {
	var error = false;
	try {
		localStorage['restaurant'] = JSON.stringify(Restaurant.instances);
	} catch(error) {
		console.log('Error when saving to Local Storage ' + error);
		error = true;
	}

	if(!error) {
		console.log("Number of restaurants saved: " + Object.keys(Restaurant.instances) );
	}
};

Restaurant.prototype.addRest = function(info) {
	Restaurant.instances[info.id] = new Restaurant(info);
	console.log("Restaurant " + info.name + " with id: "+ info.id + " has been added to the list");
};
Restaurant.prototype.updateRest = function() {};
Restaurant.prototype.deleteRest = function() {};
Restaurant.prototype.deleteAll = function() {};
Restaurant.prototype.createTestData = function() {};
