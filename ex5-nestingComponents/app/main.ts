import {bootstrap} from 'angular2/platform/browser';
import {ArtistListComponent} from './artist-list.component';

bootstrap(ArtistListComponent)
  .then(success => console.log("success"))
  .catch(error => console.log(error))
