import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenBodyComponent } from './main-screen-body.component';

describe('MainScreenBodyComponent', () => {
  let component: MainScreenBodyComponent;
  let fixture: ComponentFixture<MainScreenBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScreenBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
