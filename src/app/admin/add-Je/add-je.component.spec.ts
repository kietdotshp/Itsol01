import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJeComponent } from './add-je.component';

describe('AddJeComponent', () => {
  let component: AddJeComponent;
  let fixture: ComponentFixture<AddJeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
