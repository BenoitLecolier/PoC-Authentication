PocApp.module("HomeApp", function (HomeApp, App, Backbone, Marionette, $, _) {

    HomeApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'home': 'showHome'
        }
    });

    var API = {
        showHome: function(){return HomeApp.Show.Controller.showHome(); }
    };

    PocApp.addInitializer(function(){
        return new HomeApp.Router({ controller: API });
    });
});