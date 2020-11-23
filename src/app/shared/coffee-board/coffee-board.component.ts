import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { BoardService } from './services/board.service';

@Component({
  selector: 'coffee-board',
  templateUrl: './coffee-board.component.html',
  styleUrls: ['./coffee-board.component.scss']
})

export class CoffeeBoardComponent implements OnInit, AfterViewInit {
  @ViewChild('leftSide', {read: ElementRef}) leftSide: ElementRef;
  @ViewChild('uploadLogoImg', {read: ElementRef}) logo: ElementRef;

  winHeight = window.innerHeight;
  lineHeight: number;
  rightColWidth: number;
  logoLoaded = false;

  constructor(private cdRef:ChangeDetectorRef, public boardS: BoardService) {
    this.rightColWidth = (this.winHeight * .9) / 4;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const leftListRowCount = this.boardS.config[this.boardS.language].leftSideList.length;
    this.lineHeight = (this.leftSide.nativeElement.clientHeight - 100) / leftListRowCount;
    console.log(this.logo);
    console.log(localStorage.getItem("logoImgBase64"));
    this.logo.nativeElement.src = "data:image/png;base64," + localStorage.getItem("logoImgBase64");
    this.cdRef.detectChanges();

  }

  uploadImage(e: any, imageEl: any) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imageEl.src = e.target.result;
      // localStorage.setItem("logoImgBase64", this.getBase64Image(imageEl.src));
      this.logoLoaded = true;
      //linkDownload.href = e.target.result;
      // linkDownload.downdoad();
    };

    // read the image file as a data URL.
    reader.readAsDataURL(e.target.files[0]);
  }

  public getBase64Image(img)  {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    debugger;
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
