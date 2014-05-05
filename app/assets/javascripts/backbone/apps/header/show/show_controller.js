PocApp.module("HeaderApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {

        showHeader: function() {
            layout = new Show.Layout;

            layout.on("show", (function (that) {
                return function() {
                    that.showMenu(layout);
                    that.showLogin(layout);
                };

            })(this));

            App.headerRegion.show(layout);
        },

        showMenu: function(layout) {
            var menuView = new Show.Menu;
            layout.menuRegion.show(menuView);
        },

        showLogin: function(layout) {
            var loginView = new Show.Login;
            layout.loginRegion.show(loginView);
        }
    };
});
