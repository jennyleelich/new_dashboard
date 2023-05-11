import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringDashboardComponent } from './spring-dashboard.component';

describe('SpringDashboardComponent', () => {
  let component: SpringDashboardComponent;
  let fixture: ComponentFixture<SpringDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
