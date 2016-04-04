import { Component, OnDestroy, OnInit, ViewChild } from 'angular2/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { FilterTextComponent, FilterService } from '../blocks/blocks';
import { Artist, ArtistService } from './artist.service';

@Component({
  selector: 'concert-artists',
  templateUrl: './app/artists/artist-list.component.html',
  styleUrls: ['./app/artists/artist-list.component.css'],
  providers: [FilterService]
})

export class ArtistListComponent implements OnDestroy, OnInit{
  artists: Artists[];
  filteredArtists = this.artists;
  @ViewChild(FilterTextComponent) filterComponent; FilterTextComponent;

  constructor(
    private _filterService: FilterService,
    private _artistService: ArtistService) {}

  filterChanged(searchText: string){
    this.filteredArtists = this._filterService.filter(searchText, ['id', 'name'], this.artists);
  }

  getArtists(){
    this.artists = [];
    this._artistService.getArtists()
      .subscribe(artists => {
        this.artists = this.filteredArtists = artists;
        this.filterComponent.clear();
      });
  }

  ngOnInit(){
    componentHandler.upgradeDom();
    this.getArtists();
  }


}