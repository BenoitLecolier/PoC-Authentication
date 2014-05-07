PocApp.module("PrivateApp", function (PrivateApp, App, Backbone, Marionette, $, _) {

    PrivateApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'private': 'showPrivate'
        }
    });

    var API = {
        showPrivate: function() { return PrivateApp.Show.Controller.showPrivate(); }
    };

    PocApp.addInitializer(function () {
        return new PrivateApp.Router({ controller: API });
    });
});