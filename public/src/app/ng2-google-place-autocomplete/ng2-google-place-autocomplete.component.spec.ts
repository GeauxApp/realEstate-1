import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2GooglePlaceAutocompleteComponent } from './ng2-google-place-autocomplete.component';

describe('Ng2GooglePlaceAutocompleteComponent', () => {
  let component: Ng2GooglePlaceAutocompleteComponent;
  let fixture: ComponentFixture<Ng2GooglePlaceAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2GooglePlaceAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2GooglePlaceAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
