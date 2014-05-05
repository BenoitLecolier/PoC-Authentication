PocApp.module("HomeApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showHome : function () {
            var homeView = new Show.Home;
            App.mainRegion.show(homeView);
        }
    };
});