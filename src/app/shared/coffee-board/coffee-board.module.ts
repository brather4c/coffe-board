import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoffeeBoardComponent } from './coffee-board.component';
import { CoffeeBoardListHeaderComponent } from './components/coffee-board-list-header/coffee-board-list-header.component';
import { CoffeeBoardListComponent } from './components/coffee-board-list/coffee-board-list.component';
import { CoffeeBoardBgComponent } from './components/coffee-board-bg/coffee-board-bg.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    CoffeeBoardComponent,
    CoffeeBoardListHeaderComponent,
    CoffeeBoardListComponent,
    CoffeeBoardBgComponent,
  ],
  exports: [
    CommonModule,
    CoffeeBoardComponent,
    CoffeeBoardListHeaderComponent,
    CoffeeBoardListComponent,
    CoffeeBoardBgComponent,
  ],
})
export class CoffeeBoardModule { }