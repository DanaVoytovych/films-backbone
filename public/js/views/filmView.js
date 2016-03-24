var app = app || {}

// One Film
app.filmView = Backbone.View.extend({
    model: app.film,
    tagName: 'li',
    template: '',
    className: 'test',

    events: {
        'click .year': 'ololo'
    },

    ololo: function () {
        alert(this.model.attributes.year);
    },

    initialize: function() {
        this.template = _.template($('#filmItem').html());
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
