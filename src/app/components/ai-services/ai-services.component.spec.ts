import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIServicesComponent } from './ai-services.component';

describe('AIServicesComponent', () => {
  let component: AIServicesComponent;
  let fixture: ComponentFixture<AIServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});