import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCategoriePage } from './detail-categorie.page';

describe('DetailCategoriePage', () => {
  let component: DetailCategoriePage;
  let fixture: ComponentFixture<DetailCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
