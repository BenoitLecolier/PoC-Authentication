PocApp.module("LoginApp.Show", function (Show, App, Backbone, Marionette, $, _) {

    Show.Login = Marionette.ItemView.extend({
        template: "login/show/templates/show_login",

        triggers: {
            "click #signin": "signin:button:clicked"
        }
    });
});