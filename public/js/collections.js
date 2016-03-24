var app = app || {}

app.FilmsCollection = Backbone.Collection.extend({
	model: app.Film,
	url: '/api/films'
});

app.films = new app.FilmsCollection();
app.films.fetch({
    success: function (collection, response, options) {
        var list = new app.filmsListView();
        list.render();
    },
    error: function (collection, response, options) {
    	console.log('Ой ой');
    }
});
 