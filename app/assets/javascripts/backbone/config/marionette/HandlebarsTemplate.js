(function (Handlebars, Marionette) {
    Marionette.Handlebars = {
        path:       "backbone/apps/",
        extension:  ".handlebars"
    };

    Marionette.TemplateCache.prototype.load = function(){
        if(this.compiledTemplate)
            return this.compiledTemplate;

        if(Handlebars.templates && Handlebars.templates[this.templateId])
            this.compiledTemplate = Handlebars.templates[this.templateId];
        else{
            var template = this.loadTemplate(this.templateId);
            this.compiledTemplate = this.compiledTemplate(template);
        }

        return this.compiledTemplate;
    };

    Marionette.TemplateCache.prototype.loadTemplate = function(templateId){
        var template, templateUrl;

        try{
            template = Marionette.$(templateId).html();
        }
        catch (e){}

        if(!template || template.length === 0){
            templateUrl = Marionette.Handlebars.path + templateId + Marionette.Handlebars.extension;
            Marionette.$.ajax({
                url: templateUrl,
                success: function(data){ template = data; },
                async: false
            });

            if(!template || template.length === 0)
                throw "Unable to find the template at url: '" + templateUrl + "'";
        }

        return template;
    };

    Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate){
        return Handlebars.compile(rawTemplate);
    }


}(Handlebars, Marionette));