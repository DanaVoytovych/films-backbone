var app = app || {}

Backbone.View = Backbone.View.extend({
	remove: function() {
		// Empty the element and remove it from the DOM while preserving events
		$(this.el).empty().detach();

		return this;
	}
});

var ContentView = Backbone.View.extend({
	/*
	 * Initialize with the template-id
	 */
	initialize: function(options) {
		this.template = options.template;
	},
	
	/*
	 * Get the template content and render it into a new div-element
	 */
	render: function() {
		var content = $(this.template).html();
		$(this.el).html(content);

		return this;
	}
});

var ApplicationRouter = Backbone.Router.extend({
	initialize: function(el) {
		this.el = el;
		
		this.loremView = new ContentView({template: '#lorem'});
	},

    currentView: null,

	switchView: function(view) {
		if (this.currentView) {
			// Detach the old view
			this.currentView.remove();
		}

		// Move the view element into the DOM (replacing the old content)
		this.el.html(view.el);

		// Render view after it is in the DOM (styles are applied)
		view.render();

		this.currentView = view;
	},

	routes: {
		"#lorem": "showLorem",
	},
	
	showLorem: function() {
		this.switchView(this.loremView);
	}
});


        var router = new ApplicationRouter($('#content'));

        //http://blog.viison.com/post/11097185009/how-to-switch-views-using-backbonejs
        
   