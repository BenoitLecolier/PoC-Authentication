PocApp.module("PublicApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showPublic: function() {
            var publicView = Show.Public;
            App.mainRegion.show(publicView);
        }
    };
});