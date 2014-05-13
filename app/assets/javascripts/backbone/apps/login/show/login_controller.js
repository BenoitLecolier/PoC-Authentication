PocApp.module("LoginApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showLogin: function() {
            var loginView = new Show.Login();

            loginView.on("signin:button:clicked", function(){
                var data = Backbone.Syphon.serialize(loginView);
                PocApp.commands.execute("user:signin", data);
            });

            App.mainRegion.show(loginView);
        }
    };
});