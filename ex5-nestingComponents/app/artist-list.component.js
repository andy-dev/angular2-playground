System.register(['angular2/core', './artist', './artist.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, artist_1, artist_component_1;
    var ArtistListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_1_1) {
                artist_1 = artist_1_1;
            },
            function (artist_component_1_1) {
                artist_component_1 = artist_component_1_1;
            }],
        execute: function() {
            ArtistListComponent = (function () {
                function ArtistListComponent() {
                    this.artists = [
                        new artist_1.Artist(1, "Artic Monkeys"),
                        new artist_1.Artist(2, "Steve Ray Vaugh"),
                        new artist_1.Artist(3, "Radiohead"),
                        new artist_1.Artist(4, "The Doors")
                    ];
                }
                ArtistListComponent.prototype.select = function (artist) {
                    this.selectedArtist = artist;
                };
                ArtistListComponent = __decorate([
                    core_1.Component({
                        selector: "my-artist-list",
                        templateUrl: 'app/artist-list.component.html',
                        directives: [artist_component_1.ArtistComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArtistListComponent);
                return ArtistListComponent;
            }());
            exports_1("ArtistListComponent", ArtistListComponent);
        }
    }
});
//# sourceMappingURL=artist-list.component.js.map