import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'hello';
  btn: string = 'click me';
  name: string = 'rami jawadi';
  desc: string = 'front end developper';
  counter :number = 0 ;

  //attribute

  isDisabled: boolean = true;
  image: string = '../assets/js.png';

  //styling
  color: string = 'red';
  bgColor: string = 'lightBlue';
  bgDiv: string = '#22c1c3';
  parag: string = 'font-size: 50px ; color: darkblue';
  titleColor:string='blue';

  decremenetCounter () {

    this.counter -- ;
  }
  

  
  incerementCounter () {

  this.counter ++ ;
}
}


