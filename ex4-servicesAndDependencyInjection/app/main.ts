import {bootstrap} from 'angular2/platform/browser';
import {BooksComponent} from './books.component'


bootstrap(BooksComponent)
  .then(success => console.log("success"))
  .catch(error => console.log(error))