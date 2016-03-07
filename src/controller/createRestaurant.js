app.controller.createRestaurant = {
	setupUserInterface: function() {
		var saveButton = document.forms['restaurant'].save;
		Restaurant.loadAll();
		// attach even hanlder to button
		saveButton.addEventListener('click', app.view.createRestaurant.handleSaveButtonClickEvent);
		window.addEventListener('beforeunload', function() {
			Restaurant.saveAll();
		});
	},
	// save user input data
	handleSaveButtonClickEvent: function() {
		var formSubmitted = document.forms['restaurant'];
		var info ={
			id: formSubmitted.id.value,
			name: formSubmitted.name.value,
			location: formSubmitted.location.value,
			foodItem: formSubmitted.foodItem.value,
			note: formSubmitted.note.value
		};
		Restaurant.addRest(info);
		formSubmitted.reset();
	}
};