import { Component, OnInit, ViewChild } from 'angular2/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { FilterTextComponent, FilterService } from '../filter-text/filter-text';
import { Concert, ConcertService } from './concert.service';

@Component({
  selector: 'concert-list',
  templateUrl: './app/concerts/concert-list.component.html',
  styleUrls: ['./app/concerts/concert-list.component.css'],
  directives: [FilterTextComponent],
  providers: [FilterService, ConcertService]
})

export class ConcertListComponent implements  OnInit{
  concerts: Concert[];
  filteredConcerts = this.concerts;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(
    private _filterService: FilterService,
    private _concertService: ConcertService) {}

  filterChanged(searchText: string){
    this.filteredConcerts = this._filterService.filter(searchText, ['id', 'name'], this.concerts);
  }

  getConcerts(){
    this.concerts = [];
    this._concertService.getConcerts()
      .subscribe(concerts => {
        this.concerts = this.filteredConcerts = concerts;
        this.filterComponent.clear();
      });
  }

  ngOnInit(){
    componentHandler.upgradeDom();
    this.getConcerts();
    this._concertService.getConcerts()
      .subscribe(concerts => this.concerts = concerts);
  }

}