import { Component } from '@angular/core';
import { NumbersService } from './services/numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  size: any;
  number: any;
  numbers: Array<any> = [];
  failedSize: boolean = false;
  failedLetter: boolean = false;
  failedNumber: boolean = false;
  nullSize: boolean = false;

  constructor(private service: NumbersService) { }

  print() {
    //if user doesn't type any size
    if (this.size == null) {
      this.nullSize = true;
      return
    }
    //if number is negative
    if (this.number < 0) {
      this.failedNumber = true;
      return
    }
    //If user types a letter in the number
    if (isNaN(this.number)) {
      this.failedLetter = true;
      return
    }
    //If the user types a letter in the size
    if (isNaN(this.size)) {
      this.failedLetter = true;
      return
    }
    //If the user types an invalid size
    if (this.size > 10 || this.size < 0) {
      this.failedSize = true;
      return
    }
    //If user types 0 and 0 clears the console
    if (this.number == '0' && this.size == 0) {
      console.clear();
    } else {
      this.numbers = this.number.split("");
      console.log(this.numbers);
      this.numbers.forEach(num => {
        switch (num) {
          case "1":
            this.service.makeOne(this.size);
            break;
          case "2":
            this.service.makeTwo(this.size);
            break;
          case "3":
            this.service.makeThree(this.size);
            break;
          case "4":
            this.service.makeFour(this.size);
            break;
          case "5":
            this.service.makeFive(this.size);
            break;
          case "6":
            this.service.makeSix(this.size);
            break;
          case "7":
            this.service.makeSeven(this.size);
            break;
          case "8":
            this.service.makeEight(this.size);
            break;
          case "9":
            this.service.makeNine(this.size);
            break;
          case "0":
            this.service.makeZero(this.size);
            break;
        }
      });
    }
  }

}




