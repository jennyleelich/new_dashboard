import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringTabsComponent } from './spring-tabs.component';

describe('SpringTabsComponent', () => {
  let component: SpringTabsComponent;
  let fixture: ComponentFixture<SpringTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
