import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
//  @Output() loadingRight: EventEmitter<null> = new EventEmitter();
  constructor(public appService: AppService) { }

  ngOnInit() {
  }
  // loadRight(data: any) {
  //   this.loadingRight.emit(data);
  // }
}
