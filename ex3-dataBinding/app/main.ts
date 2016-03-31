import { bootstrap } from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent)
  .then(success => console.log("Bootstraped App Successfully"))
  .catch(error => console.log(error))