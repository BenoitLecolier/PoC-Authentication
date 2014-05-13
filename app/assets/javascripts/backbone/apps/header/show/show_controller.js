PocApp.module("HeaderApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {

        showHeader: function() {
            this.layout = new Show.Layout;

            this.layout.on("show", (function (that) {
                return function() {
                    that.showMenu();
                    that.showLogin();
                };

            })(this));

            App.headerRegion.show(this.layout);
        },

        showMenu: function() {
            var menus = PocApp.reqres.request("header:menus");
            var menuView = new Show.Menus({collection: menus});
            this.layout.menuRegion.show(menuView);
        },

        showLogin: function() {
            var login = PocApp.reqres.request("header:login");
            var loginView = new Show.Login({model:login});
            this.layout.loginRegion.show(loginView);
        },

        showLoggedIn: function(){
            // request for authenticated user info
            //var user = PocApp.reqres.request("get:authenticated:user");

            var authenticatedView = new Show.Authenticated();

            authenticatedView.on("signout:button:clicked", function(){
                PocApp.commands.execute("user:signout");
            });

            this.layout.loginRegion.show(authenticatedView);
        }
    };
});
