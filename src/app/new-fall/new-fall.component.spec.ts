import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFallComponent } from './new-fall.component';

describe('NewFallComponent', () => {
  let component: NewFallComponent;
  let fixture: ComponentFixture<NewFallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewFallComponent]
    });
    fixture = TestBed.createComponent(NewFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
