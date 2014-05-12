PocApp.module("PrivateApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Private = Marionette.ItemView.extend({
        template: "private/show/templates/show_private"
    });
});