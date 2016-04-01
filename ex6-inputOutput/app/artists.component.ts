import { Component, EventEmitter, Input, OnInit, Output } from 'angular2/core';
import { Artist, ArtistService } from './artist.service';
import { ArtistComponent } from './artist.component';

@Component({
  selector: 'concert-artists',
  templateUrl: './app/artists.component.html',
  styleUrls: ['./app/artists.component.css'],
  directives: [ArtistComponent],
  providers: [ArtistService]
})
export class ArtistsComponent implements OnInit {
  @Output() changed = new EventEmitter<Artist>();
  @Input() concertId: number;
  artists: Artist[];
  selectedArtist: Artist;

  constructor(private _artistService: ArtistService) { }

  ngOnInit() {
    this._artistService.getArtists(this.concertId)
      .subscribe(artists => this.artists = artists);
  }

  select(selectedArtist: Artist) {
    this.selectedArtist = selectedArtist;
    this.changed.emit(selectedArtist);
  }
}

