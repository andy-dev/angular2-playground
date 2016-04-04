import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from 'angular2/core';
import { Artist, ArtistService } from './artist.service';
import { ArtistComponent } from './artist.component';
import { FilterService, FilterTextComponent} from './blocks/blocks';

@Component({
  selector: 'concert-artists',
  templateUrl: './app/artists.component.html',
  styleUrls: ['./app/artists.component.css'],
  directives: [ArtistComponent, FilterTextComponent],
  providers: [ArtistService, FilterService]
})
export class ArtistsComponent implements OnInit {
  @Output() changed = new EventEmitter<Artist>();
  @Input() concertId: number;
  artists: Artist[];
  filteredArtists = this.artists;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  selectedArtist: Artist;

  constructor(private _artistService: ArtistService,
    private _filterService: FilterService) { }

  filterChanged(searchText: string){
    this.filteredArtists = this._filterService.filter(searchText, ['id', 'name'], this.artists);
  }

  getArtists() {
    this.artists = [];

    this._artistService.getArtists(this.concertId)
      .subscribe(artists => {
        this.artists = this.filteredArtists = artists;
        this.filterComponent.clear();
      });
  }

  ngOnInit() {
    this._artistService.getArtists(this.concertId)
      .subscribe(artists => this.artists = artists);
  }

  select(selectedArtist: Artist) {
    this.selectedArtist = selectedArtist;
    this.changed.emit(selectedArtist);
  }
}

