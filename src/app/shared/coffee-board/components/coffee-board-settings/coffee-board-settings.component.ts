import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'coffee-board-settings',
  templateUrl: './coffee-board-settings.component.html',
  styleUrls: ['./coffee-board-settings.component.scss']
})

export class CoffeeBoardSettingsComponent implements OnInit {
  public showSettings: boolean;

  constructor(public boardS: BoardService) { }

  ngOnInit() {}

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

}
