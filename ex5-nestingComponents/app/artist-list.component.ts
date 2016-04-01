import {Component} from 'angular2/core';
import {Artist} from './artist';
import {ArtistComponent} from './artist.component';


@Component({
  selector    : "my-artist-list",
  templateUrl : 'app/artist-list.component.html',
  directives  : [ArtistComponent]
})

export class ArtistListComponent{
  selectedArtist: Artist;

  artists = [
    new Artist(1, "Artic Monkeys"),
    new Artist(2, "Steve Ray Vaugh"),
    new Artist(3, "Radiohead"),
    new Artist(4, "The Doors")
  ];

  select(artist: Artist){
    this.selectedArtist = artist;
  }
}


// @Component decorator provides the metadata describing the component
// selector -- is the name of the element we will use in the template
// templateUrl and styleUrls -- point to template and styles
// directives -- declare custom directives it uses (in this example we import line 3 our compnent and we tell angular that its a child component in line 8)
// providers -- declare services and component needs


// COMPONENTS
// controls a part of the screen (view)

// INJECTORS
// we take the contructor and we pass in the service
// for example constructor( private _carService: CarService) { }

// OUTPUT
// if we want to comunicate to parent component
// can comunicate to anyone hosting
// @Output() changed = new EventEmitter<Artist>();
//

// INPUT
// pass values into the component
// maybe we need to pass in an id to our component our something

// PROPERTIES
// We also have properties
// artists: Artist[];

// FUNCTIONS/ACTIONS
// select(selectedArtist: Artist){
//   this.selectedArtist = selectedArtist;
//   this.change.emit(selectedArtist);
// }

