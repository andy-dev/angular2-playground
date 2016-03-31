import { Injectable } from 'angular2/core';

@Injectable()
export class BookService{
  getBooks = () => [
    { id: 1, name: "100 años de Soledad"},
    { id: 2, name: "Made to Stick"},
    { id: 3, name: "Thinking Fast, Thinking Slow"},
  ];
}

