import { Component } from 'angular2/core';
import { BookService } from './book.service';

@Component({
  selector    : 'my-books',
  templateUrl : 'app/books.component.html',
  providers   : [BookService] // we register our service right here
})

export class BooksComponent{
  //here we say, in our constructor we want to accept a service
  constructor( private _bookService: BookService) { }
  books = this._bookService.getBooks();
}

// IMPORTANT TAKE AWAYS
// we only put our service in our highest level component to avoid multiple instances
// and will give us errors if we are managing state
// any child of that component can use that service