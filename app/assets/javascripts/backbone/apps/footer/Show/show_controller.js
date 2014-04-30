PocApp.Module("FooterApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showFooter : function () {
            var footerView;
            footerView = this.getFooterView;
            App.footerRegion.show(footerView);
        },

        getFooterView : function () {
            return Show.Footer();
        }
    };
});
