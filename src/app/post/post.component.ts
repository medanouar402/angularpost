import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	@Input() postName : string;
	@Input() postContent : string;
	@Input() postLoveIts : number;
	@Input() postDate : Date;
		
	

  constructor() { }

  ngOnInit() {
  }
onLove()
    {
    	this.postLoveIts += 1 ;
        
        
        
      }
  onDont()
    {
        	this.postLoveIts -= 1 ;

   
      
    }
}
