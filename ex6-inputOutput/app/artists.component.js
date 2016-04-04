System.register(['angular2/core', './artist.service', './artist.component', './blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, artist_service_1, artist_component_1, blocks_1;
    var ArtistsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_service_1_1) {
                artist_service_1 = artist_service_1_1;
            },
            function (artist_component_1_1) {
                artist_component_1 = artist_component_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            ArtistsComponent = (function () {
                function ArtistsComponent(_artistService, _filterService) {
                    this._artistService = _artistService;
                    this._filterService = _filterService;
                    this.changed = new core_1.EventEmitter();
                    this.filteredArtists = this.artists;
                }
                ArtistsComponent.prototype.filterChanged = function (searchText) {
                    this.filteredArtists = this._filterService.filter(searchText, ['id', 'name'], this.artists);
                };
                ArtistsComponent.prototype.getArtists = function () {
                    var _this = this;
                    this.artists = [];
                    this._artistService.getArtists(this.concertId)
                        .subscribe(function (artists) {
                        _this.artists = _this.filteredArtists = artists;
                        _this.filterComponent.clear();
                    });
                };
                ArtistsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._artistService.getArtists(this.concertId)
                        .subscribe(function (artists) { return _this.artists = artists; });
                };
                ArtistsComponent.prototype.select = function (selectedArtist) {
                    this.selectedArtist = selectedArtist;
                    this.changed.emit(selectedArtist);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ArtistsComponent.prototype, "changed", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ArtistsComponent.prototype, "concertId", void 0);
                __decorate([
                    core_1.ViewChild(blocks_1.FilterTextComponent), 
                    __metadata('design:type', blocks_1.FilterTextComponent)
                ], ArtistsComponent.prototype, "filterComponent", void 0);
                ArtistsComponent = __decorate([
                    core_1.Component({
                        selector: 'concert-artists',
                        templateUrl: './app/artists.component.html',
                        styleUrls: ['./app/artists.component.css'],
                        directives: [artist_component_1.ArtistComponent, blocks_1.FilterTextComponent],
                        providers: [artist_service_1.ArtistService, blocks_1.FilterService]
                    }), 
                    __metadata('design:paramtypes', [artist_service_1.ArtistService, blocks_1.FilterService])
                ], ArtistsComponent);
                return ArtistsComponent;
            }());
            exports_1("ArtistsComponent", ArtistsComponent);
        }
    }
});
//# sourceMappingURL=artists.component.js.map