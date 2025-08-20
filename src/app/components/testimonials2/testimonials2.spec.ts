import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonials2 } from './testimonials2';

describe('Testimonials2', () => {
  let component: Testimonials2;
  let fixture: ComponentFixture<Testimonials2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonials2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonials2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
