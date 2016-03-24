// Single Film view
var app = app || {}

app.singleFilmView = Backbone.View.extend({
    el: '#filmInfo',
    model: "",
    template: "",

    initialize: function() {
        this.model = app.singleFilmModel;
        this.template = _.template($('#singleFilmItem').html());
    },

    render: function() {
        console.log("RENDER Single Film");
        console.log(this.model);
        
        this.$el.html(this.template(this.model));
        return this;
    }
});