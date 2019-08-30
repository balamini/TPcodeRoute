import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPanneauPage } from './detail-panneau.page';

describe('DetailPanneauPage', () => {
  let component: DetailPanneauPage;
  let fixture: ComponentFixture<DetailPanneauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPanneauPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPanneauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
