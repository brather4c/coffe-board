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

  winHeight = window.innerHeight;
  lineHeight: number;
  rightColWidth: number;
  logoLoaded = false;

  constructor(private cdRef:ChangeDetectorRef, public boardS: BoardService) {
    this.rightColWidth = (this.winHeight * .95) / 4;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const leftListRowCount = this.boardS.config[this.boardS.language].leftSideList.length;
    this.lineHeight = (this.leftSide.nativeElement.clientHeight - 100) / leftListRowCount;

    this.cdRef.detectChanges();
  }

  uploadImage(e: any, imageEl: any, linkDownload: any) {
    const reader = new FileReader();

    reader.onload = (e) => {
        imageEl.src = e.target.result;
        this.logoLoaded = true;
        linkDownload.href = e.target.result;
        // linkDownload.downdoad();
    };

    // read the image file as a data URL.
    reader.readAsDataURL(e.target.files[0]);
  }
}
