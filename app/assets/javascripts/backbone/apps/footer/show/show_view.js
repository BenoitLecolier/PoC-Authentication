PocApp.module("FooterApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Footer = Marionette.ItemView.extend({

        template: "footer/show/templates/show_footer"
    });
});