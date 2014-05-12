PocApp.module("LoginApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showLogin: function() {
            var loginView = new Show.Login;

            loginView.on("signin:button:clicked", function(){
                PocApp.commands.execute("user:signin");
            });

            App.mainRegion.show(loginView);
        }
    };
});