import { Component, Input } from '@angular/core';
import { CoffeeItem } from "../../coffee-config";
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'coffee-board-list',
  templateUrl: './coffee-board-list.component.html',
  styleUrls: ['./coffee-board-list.component.scss']
})
export class CoffeeBoardListComponent {
  @Input() lineHeight: number;
  @Input() listType: string;
  @Input() list: any;

  constructor(public boardS: BoardService) {}

  saveNewValue(e: Event, selectedItem: CoffeeItem , priceIndex?: number, fildName?: string) {

    let arr: any = JSON.parse(localStorage.getItem('config'));

    arr[this.boardS.language][this.listType].map((item) => {
      if (item.id === selectedItem.id) {
        if (priceIndex || priceIndex !== null) {
          item.price[priceIndex] = (e.target as HTMLInputElement).value;
        }

        if (fildName && fildName == 'name') {
          item.name = (e.target as HTMLInputElement).value;
        }
      }
    });
    console.log(arr);
    this.boardS.config = arr;
    localStorage.setItem('config', JSON.stringify(this.boardS.config));
  }

  selectField(e) {

  }

}
