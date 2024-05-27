import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs'

//import { products } from '../products';

@Component({
  selector: 'xroadimit-component',
  templateUrl: './XroadImit.component.html',
  styleUrls: ['./XroadImit.component.scss']
})
export class XroadImitComponent implements OnInit {
  


  numberValue = 0.30;
  numberValue2 = 0.30;
  numberValue3 = 0.40;

  numberValuem = 0.20; 
  numberValuem2 = 0.10;
  numberValuem3 = 0.70;

  numberValuef = 0.80;
  numberValuef2 = 0.05;
  numberValuef3 = 0.15;

  numberValuet = 0.12;
  numberValuet2 = 0.58;
  numberValuet3 = 0.30;

  numberValuej = 0.05;
  numberValuej2 = 0.05;
  numberValuej3 = 0.90;
  maakond = "Harju maakond";


  name = new FormControl();
  dropdown = new FormControl();
  options = ['Harju maakond', 'Hiiu maakond', 'Ida-Viru maakond', 'Järva maakond', 'Jõgeva maakond', 'Lääne maakond', 'Lääne-Viru maakond', 'Pärnu maakond', 'Põlva maakond', 'Rapla maakond', 'Saare maakond', 'Tartu maakond', 'Valga maakond', 'Viljandi maakond', 'Võru maakond'];
  testSubscription: Subscription;

  

  efektMadal() {
    localStorage.setItem("efektMadal", JSON.stringify(this.numberValue));
    if (this.numberValue > 0.33) {
        localStorage.setItem("efektVarv", '1');
    }
  }

  efektKeskmine() {
    localStorage.setItem("efektKeskmine", JSON.stringify(this.numberValue2));
    if (this.numberValue2 > 0.33) {
      localStorage.setItem("efektVarv", '2');
  }
  }

  efektKorge() {
    localStorage.setItem("efektKorge", JSON.stringify(this.numberValue3));
    if (this.numberValue3 > 0.33) {
      localStorage.setItem("efektVarv", '3');
  }
  }

  makseMadal() {
    localStorage.setItem("makseMadal", JSON.stringify(this.numberValuem));
    if (this.numberValuem > 0.33) {
      localStorage.setItem("makseVarv", '1');
  }
  }

  makseKeskmine() {
    localStorage.setItem("makseKeskmine", JSON.stringify(this.numberValuem2));
    if (this.numberValuem2 > 0.33) {
      localStorage.setItem("makseVarv", '2');
  }
  }

  makseKorge() {
    localStorage.setItem("makseKorge", JSON.stringify(this.numberValuem3));
    if (this.numberValuem3 > 0.33) {
      localStorage.setItem("makseVarv", '3');
  }
  }
  
  voimMadal() {
    localStorage.setItem("voimMadal", JSON.stringify(this.numberValuef));
    if (this.numberValuef > 0.33) {
      localStorage.setItem("voimVarv", '1');
  }
  }

  voimKeskmine() {
    localStorage.setItem("voimKeskmine", JSON.stringify(this.numberValuef2));
    if (this.numberValuef2 > 0.33) {
      localStorage.setItem("voimVarv", '2');
  }
  }

  voimKorge() {
    localStorage.setItem("voimKorge", JSON.stringify(this.numberValuef3));
    if (this.numberValuef3 > 0.33) {
      localStorage.setItem("voimVarv", '3');
  }
  }

  tasuvMadal() {
    localStorage.setItem("tasuvMadal", JSON.stringify(this.numberValuet));
    if (this.numberValuet > 0.33) {
      localStorage.setItem("tasuvVarv", '1');
  }
  }

  tasuvKeskmine() {
    localStorage.setItem("tasuvKeskmine", JSON.stringify(this.numberValuet2));
    if (this.numberValuet2 > 0.33) {
      localStorage.setItem("tasuvVarv", '2');
  }
  }

  tasuvKorge() {
    localStorage.setItem("tasuvKorge", JSON.stringify(this.numberValuet3));
    if (this.numberValuet3 > 0.33) {
      localStorage.setItem("tasuvVarv", '3');
  }
  }

  toojoudMadal() {
    localStorage.setItem("toojoudMadal", JSON.stringify(this.numberValuej));
    if (this.numberValuej > 0.33) {
      localStorage.setItem("toojoudVarv", '1');
  }
  }

  toojoudKeskmine() {
    localStorage.setItem("toojoudKeskmine", JSON.stringify(this.numberValuej2));
    if (this.numberValuej2 > 0.33) {
      localStorage.setItem("toojoudVarv", '2');
  }
  }

  toojoudKorge() {
    localStorage.setItem("toojoudKorge", JSON.stringify(this.numberValuej3));
    if (this.numberValuej3 > 0.33) {
      localStorage.setItem("toojoudVarv", '3');
  }
  }

  ngOnInit() {
  }
  
  laeMaakond() {
  this.testSubscription = this.dropdown.valueChanges
  // .pipe(debounceTime(100))
  //.subscribe(value => console.log(value));
  .subscribe (value => localStorage.setItem("maakond", value));
  //.subscribe (value => localStorage.setItem("maakond", JSON.stringify(value)));
  }

}