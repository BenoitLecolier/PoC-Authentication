PocApp.module("FooterApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showFooter : function () {
            var footerView = new Show.Footer;
            App.footerRegion.show(footerView);
        }
    };
});
