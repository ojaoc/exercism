//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    this.rollOverMinutes();
    this.rollOverHours();

    return `${this.timePadding(this.hours)}:${this.timePadding(this.minutes)}`;
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }

  rollOverHours() {
    if (this.minutes < 0) {
      this.hours = (24 + this.hours + Math.floor(this.minutes / 60)) % 24;
      this.minutes = 60 + (this.minutes % 60);
    }

    if (this.hours < 0) {
      this.hours = Math.abs(24 + (this.hours % 24));
    } else {      
      this.hours = this.hours % 24;
    } 
  }

  rollOverMinutes() {
    if (this.minutes >= 60) {
      if (this.minutes % 60 === 0) {
        this.hours += this.minutes / 60;
        return this.minutes = 0;
      } else {
        this.hours += Math.floor(this.minutes / 60);
        return this.minutes %= 60;
      }
    }
  }

  timePadding(int) {
    if (int < 10) {
      return "0" + String(int);
    } else {
      return String(int);
    }
  }
}
