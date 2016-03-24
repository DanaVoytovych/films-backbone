var app = app || {}

app.singleFilmModel = null;

app.filmsRoutes = Backbone.Router.extend({
  container: null,
  view1: null,

  routes: {
    " ": "index",
    "getFilm/:id": "getFilm"
    }
});

// Initiate the router
var app_router = new app.filmsRoutes;

app_router.on('route:getFilm', function(id) {
  console.log("selected:", id);

  var films = new app.FilmsCollection();
  var singleFilm = new app.Film({id: id});

  singleFilm.collection = films;
  singleFilm.fetch({
      success: function (collection, response, options) {
        app.singleFilmModel = response;
        // return false;
        var film = new app.singleFilmView();
        film.render();
      },
      error: function (collection, response, options) {
        console.log('Ой ой');
      }
    });
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();