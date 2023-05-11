import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class AppService {
  public showSpringDetails = false;
  public cases:any = [];
  public selectedIndex = 0;
  public id: any;
  public selectedCaseIndex: any = -1;
  public sideBarNum = 'first';
  constructor(private http: HttpClient) {

  }
  loadRight(data: any ) {
    this.sideBarNum = data;
  }
  getSpringDetail() {
    return this.http.get('assets/json/spring-details.json');
  }
  getSampleFormData() {
    return this.http.get('assets/json/sampleData.json');
  }
  addingCase(data: any) {
    let k = 1;
    let c: any;
    this.cases.forEach( (item: { id: any; }) => {
      if (item.id === data.id) {
        k = 0;
      }
    });
    if (k) {
      this.cases.push(data);
      this.selectedCaseIndex = this.cases.length - 1;
      this.selectedIndex = this.selectedCaseIndex + 1;
    }
    if (k === 0) {
      for (let z = 0; z < this.cases.length; z++ ) {
        if ( data.id === this.cases[z].id) {
          c = z;
          this.selectedIndex = this.selectedIndex + 1;

        }
      }
      this.selectedCaseIndex = c;
    }
  }
  handleClose(event: any) {
    this.id = event.id;
    this.cases.forEach((item: { id: any; }) => {
      if (item.id === this.cases[event.index - 1 ].id) {
        this.cases.splice(event.index - 1 , 1);
        this.selectedIndex = 0;
        this.selectedCaseIndex = null;
      }
    });
  }
  handleChange(event: any) {
    this.selectedIndex = event.index;
    if ( this.selectedIndex === 0 ) {
      this.selectedCaseIndex = null;
    } else {
      this.selectedCaseIndex = event.index - 1;
    }
  }
}
