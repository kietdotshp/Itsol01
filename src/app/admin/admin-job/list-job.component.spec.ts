import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobComponent } from './list-job.component';

describe('ListJeComponent', () => {
  let component: ListJobComponent;
  let fixture: ComponentFixture<ListJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
