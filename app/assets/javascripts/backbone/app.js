/**
 * Created by blecolier on 30/04/2014.
 */

var PocApp;
PocApp = (function(Backbone, Marionette){
	var App = new Marionette.Application;

    App.addRegions({
        headerRegion :  '#header-region',
        mainRegion :    '#main-region',
        footerRegion :  '#footer-region'
    });

    App.addInitializer(function () {
        //App.headerRegion.start();
        App.footerRegion.start();
        Console.Log('starting footer app');
    });

    App.on('initialize:after', function(){
        if(Backbone.history){
            Backbone.history.start();
        }
    });

    return App;
})(Backbone, Marionette);