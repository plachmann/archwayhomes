import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public imageSources: string[];

  public config: ICarouselConfig = {
    verifyBeforeLoad: false,
    log: true,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  constructor() {}

 ngOnInit(){
     // called after the constructor and called  after the first ngOnChanges()
    
     this.imageSources = ['assets/images/Aiden-0.png'
                         ];

      console.log(this.imageSources);

       console.log(this.config);
  }


}
