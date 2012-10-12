C.client = (function () {

	var client = {

		isTouch: ('ontouchstart' in window),

		init: function () {

			if (!this.isTouch) {
				$(document.body).addClass('desktop');
			} else {
				this.update();
				$(window).resize(function () {
					C.client.update();
				});
			}

		},

		update: function () {

			this.width = window.innerWidth,
			this.height = window.innerHeight;

		}

	};

	return client;

}());