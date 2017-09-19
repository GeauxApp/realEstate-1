import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagePropertyComponent } from './admin-manage-property.component';

describe('AdminManagePropertyComponent', () => {
  let component: AdminManagePropertyComponent;
  let fixture: ComponentFixture<AdminManagePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
