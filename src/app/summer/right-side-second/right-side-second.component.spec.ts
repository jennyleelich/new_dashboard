import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideSecondComponent } from './right-side-second.component';

describe('RightSideSecondComponent', () => {
  let component: RightSideSecondComponent;
  let fixture: ComponentFixture<RightSideSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
