import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenTopComponent } from './main-screen-top.component';

describe('MainScreenTopComponent', () => {
  let component: MainScreenTopComponent;
  let fixture: ComponentFixture<MainScreenTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScreenTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
