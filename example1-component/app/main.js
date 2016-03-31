System.register(['angular2/platform/browser', './story.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, story_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (story_component_1_1) {
                story_component_1 = story_component_1_1;
            }],
        execute: function() {
            // in angular one, we would do something like <html ng-app="app">
            // in angular 2 we bring the module bootstrap (line 1)
            // then we call the bootstrap function and we give it the starting component
            // this will be the parent component for the whole application
            // we imported story component we refer to it here so we can use it
            browser_1.bootstrap(story_component_1.StoryComponent)
                .then(function (success) { return console.log('Bootstrap Success'); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map