import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJeComponent } from './list-je.component';

describe('ListJeComponent', () => {
  let component: ListJeComponent;
  let fixture: ComponentFixture<ListJeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
