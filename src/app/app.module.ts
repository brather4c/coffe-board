import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BgComponent } from './shared/bg/bg.component';
import { BoardListHeaderComponent } from './shared/board-list-header/board-list-header.component';
import { BoardListRowComponent } from './shared/board-list-row/board-list-row.component';
@NgModule({
  declarations: [
    AppComponent,
    BgComponent,
    BoardListHeaderComponent,
    BoardListRowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
