import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { BoardService } from './services/board.service';
import {CoffeeList, CoffeeItem} from './coffee-config';

@Component({
  selector: 'coffee-board',
  templateUrl: './coffee-board.component.html',
  styleUrls: ['./coffee-board.component.scss']
})

export class CoffeeBoardComponent implements OnInit, AfterViewInit {

  @ViewChild('leftSide', {read: ElementRef}) leftSide: ElementRef;

  config: any;
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  dateNow: Date;

  lineHeight: number;
  rightColWidth = 0;

  showSettings = false;
  bgType = false;
  logoLoaded = false;

  constructor(private cdRef:ChangeDetectorRef, public boardS: BoardService) {
    this.rightColWidth = (this.winHeight * .95) / 4;

    this.config = (localStorage.getItem('config')) ?
      JSON.parse(localStorage.getItem('config')) :
      this.setLocalData();

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.lineHeight = (this.leftSide.nativeElement.clientHeight - 100) / this.config[this.boardS.language].leftSideList.length;

    this.dateNow = new Date();
    this.cdRef.detectChanges();
  }

  setLocalData() {
    localStorage.setItem('config', JSON.stringify(CoffeeList));
    return JSON.parse(localStorage.getItem('config'));
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  resetBORD(e?:any) {
    localStorage.clear();
    this.config = this.setLocalData();

    if (e) setTimeout(()=> e.target.checked = false , 1000);
  }

  saveNewValue(e, selectedItem: CoffeeItem , i: number, dataName: string, fildName?: string) {

    let arr: any = JSON.parse(localStorage.getItem('config'));
        arr[this.boardS.language][dataName].map((item) => {
          if (item.id === selectedItem.id) {
            item.price[i] = e.target.value;
            if (fildName && fildName == 'name') item.name = e.target.value;
          }
        });

    this.config = arr;
    localStorage.setItem('config', JSON.stringify(this.config));
  }

  uploadImage(e: any, imageEl: any, linkDownload: any) {
    console.dir(e);
    console.dir(imageEl);
    var reader = new FileReader();

    reader.onload = (e) => {
        // get loaded data and render thumbnail.
        imageEl.src = e.target.result;
        this.logoLoaded = true;
        linkDownload.href = e.target.result;
        // linkDownload.downdoad();
    };

    // read the image file as a data URL.
    reader.readAsDataURL(e.target.files[0]);

    // linkDownload.href = 
  }
}
