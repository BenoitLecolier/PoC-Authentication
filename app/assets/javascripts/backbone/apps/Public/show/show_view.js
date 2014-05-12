PocApp.module("PublicApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Public = Marionette.ItemView.extend({
        template: "public/show/templates/show_public"
    });
});