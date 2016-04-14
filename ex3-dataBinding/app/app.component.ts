import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})


export class AppComponent {
  title: string;
  imagePath = "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX640_SY720_.jpg";
  messages: string[] =[];

  constructor() {
    this.title = 'Angular 2 Two-way Binding';
  }

  movie = {
    name: 'Inception'
  };

  link = "http://angular.io"


  log(msg: string, data: string){
    this.messages.splice(0,0,msg);
    console.log(msg);
    if(data){
      console.log(data)
    }
  }
}
