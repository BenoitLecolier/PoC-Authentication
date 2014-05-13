PocApp.module("PublicApp", function (PublicApp, App, Backbone, Marionette, $, _) {

    PublicApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'public': 'showPublic'
        }
    });

    var API = {
        showPublic: function(){return PublicApp.Show.Controller.showPublic();}
    };

    PocApp.addInitializer(function(){
        return new PublicApp.Router({ controller: API });
    });
});