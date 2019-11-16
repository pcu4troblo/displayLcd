import { Injectable } from '@angular/core';
import { AssignmentsService } from './assignments.service';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor(private assignments: AssignmentsService) { }

  makeOne(size: number) {
    let elements: Array<any> = ["\n", " |", "\n", " |"];
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeTwo(size: number) {
    let elements: Array<any> = [" -", " |", " -", "|", "\n", " -"];
    if (size > 1) {
      elements = [" -", " |", " -", "|", " -"];
    }
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeThree(size: number) {
    let elements: Array<any> = [" -", " |", " -", " |", " -"];
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeFour(size: number) {
    let elements: Array<any> = ["\n", "| |", " -", " |"];
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeFive(size: number) {
    let elements: Array<any> = [" -", "|", "\n", " -", " |", " -"];
    if (size > 1) {
      elements = [" -", "|", " -", " |", " -"];
    }
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeSix(size: number) {
    let elements: Array<any> = [" -", "|", "\n", " -", "| |", " -"];
    let number = "";
    if (size > 1) {
      elements = [" -", "|", " -", "| |", " -"];
    }
    number = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeSeven(size: number) {
    let elements: Array<any> = [" -", " |", "\n", " |", "\n"];
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeEight(size: number) {
    let elements: Array<any> = [" -", "| |", " -", "| |", " -"];
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeNine(size: number) {
    let elements: Array<any> = [" -", "| |", " -", " |", "\n"];
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

  makeZero(size: number) {
    let elements: Array<any> = [" -", "| |", "\n", "| |", " -"];
    let number: string = this.assignments.switchElements(elements, size);
    console.log(number);
  }

}
