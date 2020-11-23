import { Injectable } from '@angular/core';
import { CoffeeList } from "../coffee-config";
import { CoffeeBoardItem } from "../models/board.model";

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  language = (localStorage.getItem('Lang') == null) ? 'Lang 1' : localStorage.getItem('Lang');
  config: any;
  editMod = true;
  staticBg = true;

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

  resetBORD(e?:any) {
    localStorage.clear();
    this.config = this.setLocalData();

    if (e) setTimeout(()=> e.target.checked = false , 1000);
  }

  saveNewValue(e: Event, selectedItem: CoffeeBoardItem , listType, priceIndex: number, fildName?: string) {

    let arr: any = JSON.parse(localStorage.getItem('config'));

    arr[this.language][listType].map((item) => {
      if (item.id === selectedItem.id) {
        if (priceIndex || priceIndex !== null) {
          item.price[priceIndex] = (e.target as HTMLInputElement).value;
        }

        if (fildName && fildName == 'name') {
          item.name = (e.target as HTMLInputElement).value;
        }
      }
    });

    this.config = arr;
    localStorage.setItem('config', JSON.stringify(this.config));
  }
}