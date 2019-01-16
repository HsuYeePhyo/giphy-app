import { Component } from '@angular/core';
import { GiphyService, Giphy } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private giphySvc: GiphyService){}
  
  giphys: Giphy[] = [];

  performSearch($event: string){
    console.log("before SVC ", $event);
    this.giphySvc.search($event)
      .then(result =>{
        this.giphys = result;
      })
      .catch(err =>{
        console.error("Error: ", err);
      })
  }
}
