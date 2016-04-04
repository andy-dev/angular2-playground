System.register(['./concert.service', './concert-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (concert_service_1_1) {
                exportStar_1(concert_service_1_1);
            },
            function (concert_list_component_1_1) {
                exportStar_1(concert_list_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=concert.js.map