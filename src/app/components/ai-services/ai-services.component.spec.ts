import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiServicesComponent } from './ai-services.component';

describe('AIServicesComponent', () => {
  let component: AiServicesComponent;
  let fixture: ComponentFixture<AiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});