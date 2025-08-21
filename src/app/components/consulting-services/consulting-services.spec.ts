import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingServices } from './consulting-services';

describe('ConsultingServices', () => {
  let component: ConsultingServices;
  let fixture: ComponentFixture<ConsultingServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultingServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
