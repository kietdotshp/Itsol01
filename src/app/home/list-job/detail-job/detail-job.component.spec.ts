import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobComponent } from './detail-job.component';

describe('DetailJobComponent', () => {
  let component: DetailJobComponent;
  let fixture: ComponentFixture<DetailJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
