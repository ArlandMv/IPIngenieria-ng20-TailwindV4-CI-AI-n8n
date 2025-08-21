import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeHelp } from './how-we-help';

describe('HowWeHelp', () => {
  let component: HowWeHelp;
  let fixture: ComponentFixture<HowWeHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
