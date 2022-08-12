import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopHundredMarriedPartnersComponent } from './table-top-hundred-married-partners.component';

describe('TableTopHundredMarriedPartnersComponent', () => {
  let component: TableTopHundredMarriedPartnersComponent;
  let fixture: ComponentFixture<TableTopHundredMarriedPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTopHundredMarriedPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTopHundredMarriedPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
