import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { CarouselService } from 'angular4-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
 public imageSources: string[] = [
     'http://lorempixel.com/400/200/',
     'http://lorempixel.com/400/200/sports/'
  ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: true,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  constructor(private caroselService: CarouselService) {


    this.caroselService.onImageLoad().subscribe(
      (src) => console.log(src + ' - loaded'),
      (src) => console.log(src + ' - error'),
      () => console.log('all imgs loaded')
    )

  }

 ngOnInit(){
     // called after the constructor and called  after the first ngOnChanges()
    
     //this.imageSources = ['assets/images/Aiden-0.png'];

      console.log(this.imageSources);

       console.log(this.config);
  }


}
