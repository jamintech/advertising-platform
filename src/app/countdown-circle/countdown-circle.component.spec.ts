import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownCircleComponent } from './countdown-circle.component';

describe('CountdownCircleComponent', () => {
  let component: CountdownCircleComponent;
  let fixture: ComponentFixture<CountdownCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountdownCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
