import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoffeeBoardModule } from './shared/coffee-board/coffee-board.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoffeeBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
