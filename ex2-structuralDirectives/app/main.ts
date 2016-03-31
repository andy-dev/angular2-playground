import { bootstrap } from "angular2/platform/browser";
import { ArtistsComponent } from "./artists.component";

bootstrap(ArtistsComponent)
  .then(success => console.log("Bootsrap success"))
  .catch(error => console.log(error))