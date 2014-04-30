PocApp.Module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {
   this.startWithParent = false;

    API = {
        loginHeader: function() { return HeaderApp.Login.Controller.Show();}
    };

    HeaderApp.on("start", function() {
        API.loginHeader();

    });
});