'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  convertDigits = digit => {
    return digit.toString().length === 1 ? '0' + digit : digit;
  };

  handleTimer = () => {
    const time = Date.parse(this.targetDate) - Date.now();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    const root = document.querySelector(this.selector);
    root.querySelector("[data-value='days']").textContent = this.convertDigits(
      days,
    );
    root.querySelector("[data-value='hours']").textContent = this.convertDigits(
      hours,
    );
    root.querySelector("[data-value='mins']").textContent = this.convertDigits(
      mins,
    );
    root.querySelector("[data-value='secs']").textContent = this.convertDigits(
      secs,
    );
  };

  start() {
    setInterval(this.handleTimer, 1000);
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 30, 2019'),
});

document.addEventListener('DOMContentLoaded', handleLoadContent);

function handleLoadContent() {
  timer1.start();
}
