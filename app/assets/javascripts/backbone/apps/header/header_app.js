PocApp.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {

   this.startWithParent = false;

    var API;
    API = {
        showHeader:     function() { return HeaderApp.Show.Controller.showHeader(); }
    };

    HeaderApp.on("start", function() {
        API.showHeader();
    });
});