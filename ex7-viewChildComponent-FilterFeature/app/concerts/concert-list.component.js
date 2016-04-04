System.register(['angular2/core', '../blocks/blocks', './concert.service'], function(exports_1, context_1) {
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
    var core_1, blocks_1, concert_service_1;
    var ConcertListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (concert_service_1_1) {
                concert_service_1 = concert_service_1_1;
            }],
        execute: function() {
            ConcertListComponent = (function () {
                function ConcertListComponent(_filterService, _concertservice) {
                    this._filterService = _filterService;
                    this._concertservice = _concertservice;
                    this.filteredConcerts = this.concerts;
                }
                ConcertListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredConcerts = this._filterService.filter(searchText, ['id', 'name'], this.concerts);
                };
                // getconcerts(){
                //   this.concerts = [];
                //   this._concertservice.getConcerts()
                //     .subscribe(concerts => {
                //       this.concerts = this.filteredConcerts = concerts;
                //       this.filterComponent.clear();
                //     });
                // }
                ConcertListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this._concertservice.getConcerts()
                        .subscribe(function (concerts) { return _this.concerts = concerts; });
                };
                __decorate([
                    core_1.ViewChild(blocks_1.FilterTextComponent), 
                    __metadata('design:type', Object)
                ], ConcertListComponent.prototype, "filterComponent", void 0);
                ConcertListComponent = __decorate([
                    core_1.Component({
                        selector: 'concert-list',
                        templateUrl: './app/concerts/concert-list.component.html',
                        styleUrls: ['./app/concerts/concert-list.component.css'],
                        providers: [blocks_1.FilterService]
                    }), 
                    __metadata('design:paramtypes', [blocks_1.FilterService, concert_service_1.ConcertService])
                ], ConcertListComponent);
                return ConcertListComponent;
            }());
            exports_1("ConcertListComponent", ConcertListComponent);
        }
    }
});
//# sourceMappingURL=concert-list.component.js.map