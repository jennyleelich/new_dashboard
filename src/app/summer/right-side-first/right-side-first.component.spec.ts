import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideFirstComponent } from './right-side-first.component';

describe('RightSideFirstComponent', () => {
  let component: RightSideFirstComponent;
  let fixture: ComponentFixture<RightSideFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
