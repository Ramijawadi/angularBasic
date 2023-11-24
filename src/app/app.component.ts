import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'hello';
  btn: string = 'click me';
  name: string = 'rami jawadi';
  desc: string = 'front end developper';
  counter: number = 0;
  elements: string[] = ['rami' , 'alex', 'samir'];
  
  //attribute

  isDisabled: boolean = true;
  image: string = '../assets/js.png';

  //styling
  color: string = 'red';
  bgColor: string = 'lightBlue';
  bgDiv: string = '#22c1c3';
  parag: string = 'font-size: 50px ; color: darkblue';
  titleColor: string = 'blue';
  Color: boolean = false;

  titles:string = 'Structure Directives';
  names:string ="rami jawadi";
  isLoggedIn:boolean= true;


  decremenetCounter() {
    this.counter--;
  }

  incerementCounter() {
    this.counter++;
  }

  // ngModel
input: string = "initial value";

//ngClass

message : string="this is a danger message";
classes : string ="danger text-size";
contact: string = "Rami jawadi Monastir ";
contactClass :string ="contact";


//ngStyle 

selected : string ="red";

}

