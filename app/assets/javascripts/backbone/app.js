
(function(){

    this.PocApp = (function(Backbone, Marionette){
        var App;
        App = new Marionette.Application();

        App.rootRoute = "/home";

        App.addRegions({
            headerRegion :  "#header-region",
            mainRegion :    "#main-region",
            footerRegion :  "#footer-region"
        });


        App.addInitializer(function () {
            App.module("HeaderApp").start();
            App.module("FooterApp").start();
        });

        App.on("initialize:after", function(){
            if(Backbone.history){
                Backbone.history.start();
                this.navigate(this.rootRoute, { trigger: true });
            }
        });

        return App;
    })(Backbone, Marionette);

}).call(this);