import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIt } from './services-it';

describe('ServicesIt', () => {
  let component: ServicesIt;
  let fixture: ComponentFixture<ServicesIt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesIt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesIt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
