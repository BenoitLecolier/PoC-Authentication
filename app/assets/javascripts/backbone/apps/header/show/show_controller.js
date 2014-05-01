PocApp.module("HeaderApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {

        showHeader: function() {
            this.layout = this.getLayoutView();

            this.layout.on("show", (function (that) {
                that.showMenu();
                that.showLogin();
            })(this));

            App.headerRegion.show(this.layout);
        },

        showMenu: function() {
            var menuView;
            menuView = this.getMenuView();
            this.layout.menuRegion.show(menuView);
        },

        showLogin: function() {
            var loginView = this.getLoginView();
            this.layout.loginRegion.show(loginView);
        },



        getMenuView: function() {
            return new Show.Menu;
        },

        getLoginView: function() {
            return new Show.Login;
        },

        getLayoutView: function () {
            return new Show.Layout;
        }
    };
});
