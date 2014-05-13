PocApp.module("LoginApp", function (LoginApp, App, Backbone, Marionette, $, _) {

    LoginApp.Router = Marionette.AppRouter.extend({
        appRoutes:{
            'login': 'showLogin'
        }
    });

    var API = {
        showLogin: function(){ return LoginApp.Show.Controller.showLogin(); }
    };

    PocApp.addInitializer(function() {
        return new LoginApp.Router( {controller: API} );
    });

    PocApp.commands.setHandler("user:signin", function (login) {
        console.log("Command received to perform login... Do something usefull!! Maybe in another place");
        console.log(login);
    });

    PocApp.commands.setHandler("user:signout", function () {
        console.log("Command received to perform logout... Do something usefull!! Maybe in another place");
    });
});