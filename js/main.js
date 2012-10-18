var C = {

	debug: true,

	// dom elements
	$wrapper: 		$('#wrapper'),
	$log: 			$('#log'),

	// states
	states: {
		MENU: 		0,
		LISTS: 		1,
		TODOS: 		2,
		EDITING: 	3
	},

	init: function () {

		C.start = Date.now();

		// init some components
		C.client.init();
		C.db.init();
		C.touch.init();
		C.listCollection.init();

		// restore state
		var state = C.db.data.state;
		switch (state.view) {

			case C.states.MENU:
				C.log('App: init at menu.');
				C.currentCollection = C.menu;
				break;

			case C.states.LISTS:
				C.log('App: init at lists.');
				C.currentCollection = C.listCollection;
				break;

			case C.states.TODOS:
				C.log('App: init at list with ID: ' + state.listID);
				C.currentCollection = new C.TodoCollection(C.db.data.lists[state.listID]);
				break;

			default:
				C.log('App: init at lists.');
				C.currentCollection = C.listCollection;
				break;

		}

		C.$wrapper.append(C.currentCollection.el);

	},

	log: function (msg) {

		if (!this.debug) return;

		//$('#log').text(msg);

		var time = Date.now() - C.start;
		if (time < 1000) {
			time = '[' + time + 'ms] ';
		} else {
			time = '[' + (time / 1000).toFixed(2) + 's] ';
		}
		msg = time + msg;
		console.log(msg);

	}

};

$(function () {
	C.init();
});