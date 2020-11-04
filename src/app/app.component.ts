import {Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit} from '@angular/core';

import {CoffeeItem} from '../assets/coffee-config';
import {CoffeeList} from '../assets/coffee-config';

declare var Snap: any;
declare var mina: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('leftSide', {read: ElementRef}) leftSide: ElementRef;

  config: any;
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  dateNow: Date;

  lineHeight: number;
  rightColWidth = 0;

  editMod = false;
  showSettings = false;
  bgType = false;
  logoLoaded = false;

  Lang = (localStorage.getItem('Lang') == null) ? 'Lang 1' : localStorage.getItem('Lang');

  smokeArr: Array<any>;

  constructor(private cdRef:ChangeDetectorRef) {
    console.log(this.Lang);
    this.rightColWidth = (this.winHeight * .95) / 4;

    this.config = (localStorage.getItem('config')) ?
      JSON.parse(localStorage.getItem('config')) :
      this.setLocalData();

  }

  ngOnInit() {

    this.smokeArr = [
      Snap.select('.cup-smoke_small'),
      Snap.select('.cup-smoke_middle'),
      Snap.select('.cup-smoke_large'),

      Snap.select('.cup-smoke_small-2'),
      Snap.select('.cup-smoke_middle-2'),
      Snap.select('.cup-smoke_large-2')
    ];

    this.animateSmokeInverted();
  }

  ngAfterViewInit() {
    this.lineHeight = (this.leftSide.nativeElement.clientHeight - 100) / this.config[this.Lang].leftSideList.length;

    this.dateNow = new Date();
    this.cdRef.detectChanges();
  }

  setLocalData() {
    localStorage.setItem('config', JSON.stringify(CoffeeList));
    return JSON.parse(localStorage.getItem('config'));
  }

  changeLanguage(e) {
    this.Lang = (this.Lang === 'Lang 1') ? 'Lang 2' : 'Lang 1';
     
    this.config = (localStorage.getItem('config')) ?
      JSON.parse(localStorage.getItem('config')) :
      this.setLocalData();

    localStorage.setItem('Lang', this.Lang);

  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  resetBORD(e?:any) {

    localStorage.clear();

    this.config = this.setLocalData();

    if (e) setTimeout(()=> e.target.checked = false , 1000);
  }

  selectField(e) {
 //    console.log(e);
 //    if(this.editMod) {
 // console.log('2');
 //    } else {
 //      console.log('1');
 //       e.stopPropagation();
 //    }
  }

  saveNewValue(e, selectedItem: CoffeeItem , i: number, dataName: string, fildName?: string) {

    let arr: any = JSON.parse(localStorage.getItem('config'));
        arr[this.Lang][dataName].map((item) => {
          if (item.id === selectedItem.id) {
            item.price[i] = e.target.value;
            if (fildName && fildName == 'name') item.name = e.target.value;
          }
        });

    this.config = arr;
    localStorage.setItem('config', JSON.stringify(this.config));

  }

  /* ANIMATE CUP STEAM */

  animateSmokeInverted() {
    const totalAnimationDuration = 2000;
    const animationFrame = requestAnimationFrame(this.animateSmokeInverted);

    this.smokeArr.forEach((item, i) => {
      item.animate({
        opacity: 0
      }, totalAnimationDuration, mina.linear);

      item.animate({
        transform: 't62,38s-1,1t-79,-48t15,-30'
      }, totalAnimationDuration, mina.linear);
    });

    setTimeout(() => {
      this.resetAnimation();
      this.animateSmokeInverted();
    }, 2000);

    cancelAnimationFrame(animationFrame);
  }

  resetAnimation() {
    this.smokeArr.forEach((item) => {
      item.attr({
        opacity: 0.5,
        transform: 't62,38s-1,1t-79,-48t-30 120'
      });
    });
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
