PocApp.module("HomeApp", function (HomeApp, App, Backbone, Marionette, $, _) {

    PocApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'home': 'showHome'
        }
    });

    var API = {
        showHome: function(){return PocApp.Show.Controller.showHome(); }
    };

    PocApp.addInitializer(function(){
        return new PocApp.Router({ controller: API });
    });
});