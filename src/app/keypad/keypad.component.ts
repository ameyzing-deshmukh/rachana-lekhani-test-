import { Component, OnInit } from '@angular/core';
export interface Rachana {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  nine: string;
  ten: string;
  eleven: string;
  twelve: string;
  thirteen: string;
}

const ELEMENT_DATA: Rachana[] = [
  { one: '॥ॐ॥', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' }
  ];
@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  displayedColumns: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    if (this.finalRachana.length === 0 && this.line.length === 0) {
      this.line.push('॥ॐ॥');
    }
  }
  public line = [];//this is one line with 13 parts
  public finalRachana = [];//this is final rachana
  public swarmatra = '';//this is swaras in one matra
  public swarank = 2;//number of swaras in one matra; default is two;
  public swarankFix = '२';
  public taal = 'केरवा-१२०';//either kerva or khemta
  public ifKerva = true;
  // public ganank = 4;//number of gan
  public matrank = 16;//number of matras in a charan
  public matrankFix = '१६';
  public anuvadan = true;
  public charanType = 'अनुवादनसहित';
  public i = 0;
  public j = 1;

  //Write logic to dynamically capture the matra count and show metadata selections;
  captureMeta(it) {
    console.log("In captureMeta " + it);
    this.swarmatra = '';
    if (it === 'khemta') {
      this.taal = 'खेमटा-३६०';
      this.swarank = 3;
      this.ifKerva = false;
      //logic to disable Kerva numbers
    } else if (it === 'kerva') {
      this.taal = 'केरवा-१२०';
      this.ifKerva = true;
      // this.swarank = 3;
      //logic to disable Khemta numbers
    }
  }

  renderMatra(it) {

    switch (this.j) {
      case (0):
        this.dataSource[this.i].one = it;
        break;
      case (1):
        this.dataSource[this.i].two = it;
        break;
      case (2):
        this.dataSource[this.i].three = it;
        break;
      case (3):
        this.dataSource[this.i].four = it;
        break;
      case (4):
        this.dataSource[this.i].five = it;
        break;
      case (5):
        this.dataSource[this.i].six = it;
        break;
      case (6):
        this.dataSource[this.i].seven = it;
        break;
      case (7):
        this.dataSource[this.i].eight = it;
        break;
      case (8):
        this.dataSource[this.i].nine = it;
        break;
      case (9):
        this.dataSource[this.i].ten = it;
        break;
      case (10):
        this.dataSource[this.i].eleven = it;
        break;
      case (11):
        this.dataSource[this.i].twelve = it;
        break;
      case (12):
        this.dataSource[this.i].thirteen = it;
        this.i++;
        this.j = -1;
        break;
    }
    this.j++;
  }

  captureIt(it) {
    if (it === '॥' || it === ':॥' || it === '।') {
      this.renderMatra(it);
    } else if (it === ';') {
      this.renderMatra(this.swarmatra);
      this.swarmatra = '';
    }
    else {
      this.swarmatra += it;
    }
  }

  correct() {
    this.swarmatra = this.swarmatra.slice(0, -1);
  }
}
