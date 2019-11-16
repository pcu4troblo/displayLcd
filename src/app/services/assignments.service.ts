import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor() { }

  switchElements(elements:Array<any>, size: number ): string{
    let number : string = "";
    elements.forEach(char => {
      switch (char) {
        case "\n":
          number = number + this.assignSpace(size);
          break;
        case "|":
          number = number + this.assignLeftBar(size);
          break;
        case " |":
          number = number + this.assignRightBar(size);
          break;
        case " -":
          number = number + this.assignScript(size);
          break;
        case "| |":
          number = number + this.assignBothBars(size);
          break;
      }
    })

    return number;
  }

  assignScript(size: number): string {
    let arr: Array<any> = [];
    let character = " -\n";
    arr = character.split("");
    for (let i = 1; i < size; i++) {
      arr.splice(1, 0, "-")
    }
    character = arr.join("");
    return character;
  }

  assignRightBar(size: number): string {
    let arr: Array<any> = [];
    let character = "  |\n";
    let char: string = "";
    arr = character.split("")
    for (let i = 1; i < size; i++) {
      arr.splice(1, 0, " ")
    }
    character = arr.join("");
    char = character;
    for (let j = 1; j < size; j++) {
      character = character + char;
    }
    return character
  }

  assignLeftBar(size: number): string {
    let arr: Array<any> = [];
    let character = "|";
    let char: string = "";
    if (size > 1) {
      arr = character.split("");
      arr.push("\n");
      character = arr.join("");
      char = character;
      for (let j = 1; j < size; j++) {
        character = character + char;
      }
    }
    return character
  }

  assignBothBars(size: number): string {
    let arr: Array<any> = [];
    let character = "| |\n";
    let char: string = "";
    if (size > 1) {
      arr = character.split("")
      for (let i = 1; i < size; i++) {
        arr.splice(1, 0, " ")
      }
      character = arr.join("");
      char = character;
      for (let j = 1; j < size; j++) {
        character = character + char;
      }
    }
    return character
  }

  assignSpace(size: number): string {
    return "\n"
  }

}
