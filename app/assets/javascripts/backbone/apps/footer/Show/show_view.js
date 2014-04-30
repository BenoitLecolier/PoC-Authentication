/**
 * Created by blecolier on 30/04/2014.
 */

PocApp.Module("FooterApp.Show", function (Show, App, Backbone, Marionette, $, _) {
    Show.Footer = Marionette.View.ItemView.extend({
        template: JST["footer/show/templates/show_footer"],

        modelEvents: {
            "change": "render"
        }
    });
});