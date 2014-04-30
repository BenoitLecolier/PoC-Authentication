PocApp.Module("FooterApp", function (FooterApp, App, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    var API = {
        showFooter: function () {
            return FooterApp.Show.Controller.showFooter();
        }
    };

    FooterApp.on("start", function () {
        Console.Log('starting footer app');
        API.showFooter();
    });
});