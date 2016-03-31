System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Artist;
    return {
        setters:[],
        execute: function() {
            Artist = (function () {
                function Artist(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Artist;
            }());
            exports_1("Artist", Artist);
        }
    }
});
//# sourceMappingURL=artist.js.map