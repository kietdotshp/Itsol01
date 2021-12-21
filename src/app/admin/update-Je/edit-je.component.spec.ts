import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJeComponent } from './edit-je.component';

describe('EditJeComponent', () => {
  let component: EditJeComponent;
  let fixture: ComponentFixture<EditJeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditJeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
