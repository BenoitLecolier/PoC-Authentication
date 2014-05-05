PocApp.module("HomeApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Home = Marionette.ItemView.extend({
        template : "home/show/templates/show_home"
    });

});