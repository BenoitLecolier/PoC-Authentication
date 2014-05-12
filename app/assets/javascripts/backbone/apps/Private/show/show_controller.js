PocApp.module("PrivateApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showPrivate: function() {
            var privateView = new Show.Private;
            App.mainRegion.show(privateView);
        }
    };
});