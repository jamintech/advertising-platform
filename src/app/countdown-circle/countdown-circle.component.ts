import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-countdown-circle',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './countdown-circle.component.html',
  styleUrls: ['./countdown-circle.component.scss']
})
export class CountdownCircleComponent implements OnInit {
  countdown: number = 10;
  strokeDasharray: string = '0, 100';
  private intervalId: any;
  private halfSecondCounter: number = 0;


  @Output() countdownFinished = new EventEmitter<void>();

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    // Immediately decrement the countdown and update the strokeDasharray
    //this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.halfSecondCounter++;
      if (this.halfSecondCounter % 2 === 0) {
        this.updateCountdown();
      } else {
        this.updateStrokeDasharray();
      }
    }, 500);
  }

  updateCountdown(): void {
    if (this.countdown > 0) {
      this.countdown--;
      this.updateStrokeDasharray();
      if (this.countdown === 0) {
        this.countdownFinished.emit();
      }
    } else {
      clearInterval(this.intervalId);
      //this.countdownFinished.emit();
    }
  }

  updateStrokeDasharray(): void {
    this.strokeDasharray = `${(10 - this.countdown) * 10}, 100`;
  }

  resetCountdown(): void {
    clearInterval(this.intervalId);
    this.countdown = 10;
    this.strokeDasharray = '0, 100';
    this.halfSecondCounter = 0;
    this.startCountdown();
  }
}