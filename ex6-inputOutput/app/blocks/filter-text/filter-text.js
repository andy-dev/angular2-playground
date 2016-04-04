System.register(['./filter-text.component', './filter-text.service'], function(exports_1, context_1) {
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
            function (filter_text_component_1_1) {
                exportStar_1(filter_text_component_1_1);
            },
            function (filter_text_service_1_1) {
                exportStar_1(filter_text_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=filter-text.js.map