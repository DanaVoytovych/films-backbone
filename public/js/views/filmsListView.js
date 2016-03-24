// Films list
var app = app || {}

app.filmsListView = Backbone.View.extend({
    el: 'ul',
    model: app.films,

    render: function() {
        console.log("RENDER BEGIN");

        for(var i = 0; i < this.model.length; ++i) {
            // lets create a book view to render
            var filmView = new app.filmView({
                model: this.model.at(i)
            });

            // lets add this book view to this list view
            this.$el.append(filmView.$el); 
            filmView.render(); // lets render the book           
        }

        return this;
    }
});