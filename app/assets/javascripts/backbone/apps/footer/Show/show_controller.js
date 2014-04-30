/**
 * Created by blecolier on 30/04/2014.
 */

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
