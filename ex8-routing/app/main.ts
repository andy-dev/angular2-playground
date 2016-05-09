import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [])
  .then(success => console.log("success bootraping app"))
  .catch(error => console.log(error))
