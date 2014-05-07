PocApp.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
    Entities.MenuEntry = Backbone.Model.extend({});

    Entities.MenuEntries = Backbone.Collection.extend({
        model:  Entities.MenuEntry
    });

    API = {
        getMenus: function(){return new Entities.MenuEntries(
            [
                { name: "Home", url:"#/home" },
                { name: "Public", url:"#/public" },
                { name: "Private", url:"#/private" }
            ]
        );},

        getLoginMenu: function(){
            return new Entities.MenuEntry({name: "Login", url:"#/login"});
        }
    };

    PocApp.reqres.setHandler("header:login", function(){ return API.getLoginMenu(); });
    PocApp.reqres.setHandler("header:menus", function(){ return API.getMenus(); });
});