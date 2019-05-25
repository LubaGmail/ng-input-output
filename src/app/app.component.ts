import { Component } from '@angular/core';
import {IEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Post 1',
    isFav: true
  }

  constructor () {
  }
  
  handleChange(eventArgs: IEventArgs) {
    console.log('handleChange', eventArgs);
  }
}
