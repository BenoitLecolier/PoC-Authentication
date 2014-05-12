(function(Backbone){
    Backbone.Marionette.Application.prototype.navigate = function(route, options){
        if (options == null)
            options = {};

        if (route.charAt(0) == "/")
            route = "#" + route;

        return Backbone.history.navigate(route, options);
    };

    Backbone.Marionette.Application.prototype.getCurrentRoute = function () {
        return Backbone.history.fragment;
    };
}(Backbone));