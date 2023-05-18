import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWinterComponent } from './new-winter.component';

describe('NewWinterComponent', () => {
  let component: NewWinterComponent;
  let fixture: ComponentFixture<NewWinterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewWinterComponent]
    });
    fixture = TestBed.createComponent(NewWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
