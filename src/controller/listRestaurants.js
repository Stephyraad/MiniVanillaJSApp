app.controller.listRestaurants = {
	setupUserInterface: function() {
		var tableBody = document.querySelector('table#restaurant>tbody');
		var row;

		//load all Restaurants
		Restaurant.loadAll();
		var keys = Object.keys(Restaurant.instances);
		// create rows and cells for each restaurant
		keys.forEach(function(key) {
			row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = Restaurant.instances[key].id;      
      row.insertCell(-1).textContent = Restaurant.instances[key].name;  
      row.insertCell(-1).textContent = Restaurant.instances[key].location;
      row.insertCell(-1).textContent = Restaurant.instances[key].foodItem;
      row.insertCell(-1).textContent = Restaurant.instances[key].note;
		})
	}
}