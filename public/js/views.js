// Films
var filmsListView = Backbone.View.extend({
    el: 'ul',
    model: Films,

    render: function() {
        this.$el.html(); // lets render this view
        
        for(var i = 0; i < this.model.length; ++i) {
            // lets create a book view to render
            var m_bookView = new filmView({
                model: this.model.at(i)
            });

            // lets add this book view to this list view
            this.$el.append(m_bookView.$el); 
            m_bookView.render(); // lets render the book           
        } 

         return this;
    },
});


// One Film
var filmView = Backbone.View.extend({
    model: Film,
    tagName: 'li',
    template: '',

    initialize: function() {
        this.template = _.template($('#filmItem').html());
    },

    render: function() {
        // this.$el.html(this.template(this.model.attributes));
        // return this;
    }
});

