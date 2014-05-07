(function(Backbone){
    Backbone.Marionette.Application.prototype.navigate = function(route){
        if (route.charAt(0) == "/")
            route = "#" + route;

        return Backbone.history.navigate(route);
    };

    Backbone.Marionette.Application.prototype.getCurrentRoute = function () {
        return Backbone.history.fragment;
    };
}(Backbone));