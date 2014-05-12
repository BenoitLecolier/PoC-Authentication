PocApp.module("PublicApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showPublic: function() {
            var publicView = new Show.Public;
            App.mainRegion.show(publicView);
        }
    };
});