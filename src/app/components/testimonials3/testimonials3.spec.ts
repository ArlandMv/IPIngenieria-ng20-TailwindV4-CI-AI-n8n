import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonials3 } from './testimonials3';

describe('Testimonials3', () => {
  let component: Testimonials3;
  let fixture: ComponentFixture<Testimonials3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonials3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonials3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
