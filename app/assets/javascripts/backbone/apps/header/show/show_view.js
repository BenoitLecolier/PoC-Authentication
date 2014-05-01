PocApp.module("HeaderApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Layout = Marionette.Layout.extend({
        template: "header/show/templates/show_layout",

        regions: {
            menuRegion:     "#menu-region",
            loginRegion:    "#login-region"
        }

    });

    Show.Menu = Marionette.ItemView.extend({
        template: "header/show/templates/_menu"

    });

    Show.Login = Marionette.ItemView.extend({
        template: "header/show/templates/_login"

    });

});