PocApp.module("LoginApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showLogin: function() {
            var loginView = new Show.Login;
            App.mainRegion.show(loginView);
        }
    };
});