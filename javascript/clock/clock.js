export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    this.rollOverPositive();
    this.rollOverNegative();

    return `${this.timePadding(this.hours)}:${this.timePadding(this.minutes)}`;
  }

  plus(int) {
    this.minutes += int;
    return this.toString();
  }

  minus(int) {
    this.minutes -= int;
    return this.toString();
  }

  equals(object) {
    return this.toString() === object.toString();
  }

  rollOverNegative() {
    if (this.minutes < 0) {
      this.hours = (24 + this.hours + Math.floor(this.minutes / 60)) % 24;
      this.minutes = 60 + (this.minutes % 60);
    }

    if (this.hours < 0) {
      return this.hours = Math.abs(24 + (this.hours % 24));
    } else {      
      return this.hours = this.hours % 24;
    } 
  }

  rollOverPositive() {
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