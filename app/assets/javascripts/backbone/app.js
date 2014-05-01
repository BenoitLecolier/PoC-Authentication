
(function(){

    this.PocApp = (function(Backbone, Marionette){
        var App;
        App = new Marionette.Application();

        App.addRegions({
            headerRegion :  "#header-region",
            mainRegion :    "#main-region",
            footerRegion :  "#footer-region"
        });


        App.addInitializer(function () {
            //App.headerRegion.start();
            App.module("FooterApp").start();
        });

        App.on("initialize:after", function(){
            if(Backbone.history){
                return Backbone.history.start();
            }
        });

        return App;
    })(Backbone, Marionette);

}).call(this);