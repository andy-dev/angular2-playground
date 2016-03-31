System.register(['angular2/platform/browser', './artist-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, artist_list_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (artist_list_component_1_1) {
                artist_list_component_1 = artist_list_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(artist_list_component_1.ArtistListComponent)
                .then(function (success) { return console.log("success"); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map