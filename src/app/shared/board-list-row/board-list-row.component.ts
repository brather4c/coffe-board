import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {CoffeeItem} from "../../../assets/coffee-config";
import { BoardService } from '../../services/board.service';
@Component({
  selector: 'board-list-row',
  templateUrl: './board-list-row.component.html',
  styleUrls: ['./board-list-row.component.scss']
})
export class BoardListRowComponent implements OnInit {
  @Input() lineHeight: number;
  @Input() listType: string;
  @Input() list: any;

  constructor(public boardS: BoardService) {

  }

  ngOnInit() {

  }

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
