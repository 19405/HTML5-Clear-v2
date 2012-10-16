C.listCollection = {

	y: 0,
	upperBound: 0,

	init: function () {

		C.log('ListCollection: init');

		this.items = [];
		this.render();
		this.populateItems();
		this.updateColor();
		this.updatePosition();

	},

	render: function () {

		this.el = $('<div id="list-collection" class="collection"></div>');
		this.style = this.el[0].style;

	},

	populateItems: function () {

		var lists = C.db.data.lists,
			i = this.count = lists.length,
			li;

		while (i--) {
			li = new C.listItem(lists[i]);
			li.collection = this;
			li.id = this.items.length;
			li.el
				.data('id', li.id)
				.appendTo(this.el);
			this.items.push(li);
		}

		C.Collection.updateBounds.apply(this);

	},

	fade: function (at) {
		//TODO implement this
		var t = this;
		t.el.addClass('fade');
		setTimeout(function () {
			t.el.css('display', 'none');
		}, 300);
	},

	getItem: function () {
		return C.Collection.getItem.apply(this, arguments);
	},

	collapseAt: function () {
		C.Collection.collapseAt.apply(this, arguments);
	},

	countIncomplete: function () {
		C.Collection.countIncomplete.apply(this, arguments);
	},

	updateBounds: function () {
		C.Collection.updateBounds.apply(this, arguments);
	},

	updateColor: function () {
		C.Collection.updateColor.apply(this, arguments);
	},

	updatePosition: function () {
		C.Collection.updatePosition.apply(this, arguments);
	},

	onDragStart: function () {
		C.Collection.onDragStart.apply(this, arguments);
	},

	onDragMove: function () {
		C.Collection.onDragMove.apply(this, arguments);
	},

	onDragEnd: function () {
		C.Collection.onDragEnd.apply(this, arguments);
	}

};