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
            var menus = PocApp.reqres.request("header:menus");
            var menuView = new Show.Menus({collection: menus});
            layout.menuRegion.show(menuView);
        },

        showLogin: function(layout) {
            var login = PocApp.reqres.request("header:login");
            var loginView = new Show.Login({model:login});
            layout.loginRegion.show(loginView);
        }
    };
});
