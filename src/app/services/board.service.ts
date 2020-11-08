import { Injectable } from '@angular/core';
import {CoffeeList} from "../../assets/coffee-config";

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  language = (localStorage.getItem('Lang') == null) ? 'Lang 1' : localStorage.getItem('Lang');
  config: any;
  editMod = true;
  constructor() {
    this.config = (localStorage.getItem('config')) ?
      JSON.parse(localStorage.getItem('config')) :
      this.setLocalData();
  }

  changeLanguage(e) {
    this.language = (this.language === 'Lang 1') ? 'Lang 2' : 'Lang 1';

    this.config = (localStorage.getItem('config')) ?
      JSON.parse(localStorage.getItem('config')) :
      this.setLocalData();

    localStorage.setItem('Lang', this.language);

  }

  setLocalData() {
    localStorage.setItem('config', JSON.stringify(CoffeeList));
    return JSON.parse(localStorage.getItem('config'));
  }
}