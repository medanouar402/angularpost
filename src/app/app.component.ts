import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  Posts = [
  {	
  		name:' Mon Premier Post',
  		content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit,. ',
  		date: new Date(),
  		loveIts:5
  },
  {	
  		name:' Mon Premier Post',
  		content:' Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  		date: new Date(),
  		loveIts:-6
  },
{	
  		name:' Mon Premier Post',
  		content:' Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  		date: new Date(),
  		loveIts:0
  }

  ];

  
}
