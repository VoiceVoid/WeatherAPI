import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }
  allnumber = [1,2,3,4,5,6,7,8,9,10];
  numbers = [];
  
  ngOnInit() {
   
    console.log(this.allnumber);
   
  }

  count(){
    for(let i = 1; i<= 10; i++){
      this.numbers.push(i);
      console.log(this.numbers);
    }
  
  //  this.numbers.push(1);
  //  this.numbers.push(2);
  //  this.numbers.push(3);
   
   
    console.log(this.numbers[0] + " am not defined");
    console.log(this.numbers[1] + " am not defined");
    console.log(this.numbers);
  }

}

// const we = new WeatherComponent();
// we.count();
