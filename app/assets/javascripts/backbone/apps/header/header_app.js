PocApp.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {

   this.startWithParent = false;

    var API;
    API = {
        showHeader:     function() { return HeaderApp.Show.Controller.showHeader(); },
        showLoggedIn:   function() { return HeaderApp.Show.Controller.showLoggedIn(); },
        showLogin:   function() { return HeaderApp.Show.Controller.showLogin(); }
    };

    HeaderApp.on("start", function() {
        API.showHeader();
    });

    PocApp.reqres.setHandler("user:authenticated", function () {
        API.showLoggedIn();
    });

    PocApp.vent.on("user:authenticated", function () {
        API.showLoggedIn();
    });

    PocApp.vent.on("user:deauthenticated", function () {
        API.showLogin();
    });
});