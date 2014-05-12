PocApp.module("LoginApp", function (LoginApp, App, Backbone, Marionette, $, _) {

    LoginApp.Router = Marionette.AppRouter.extend({
        appRoutes:{
            'login': 'showLogin'
        }
    });

    var API = {
        showLogin: function(){ return new LoginApp.Show.Controller.showLogin(); }
    };

    PocApp.addInitializer(function() {
        return new LoginApp.Router( {controller: API} );
    });

    PocApp.commands.setHandler("user:signin", function () {
        console.log("Command received to perform login");
    });
});