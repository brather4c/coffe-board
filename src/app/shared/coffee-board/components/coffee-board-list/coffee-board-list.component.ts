import { Component, Input } from '@angular/core';
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

  selectField(e) {}

}
