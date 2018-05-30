'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  getDowBooking(): string {
    let daysOfWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let ranDayIndex: number = Math.floor(Math.random() * 7);
    return daysOfWeek[ranDayIndex];      
  }

  getCodeBooking(): string {
    let bookingCode: string = '';
    for (let i: number = 0; i < 8; i++) {
      let randomNumChar: string = Math.floor(Math.random() * 10).toString();
      let randomNum: number = 65 + Math.floor(Math.random() * 26);
      let randomChar: string = String.fromCharCode(randomNum);  
      let randomIndex: number = Math.floor(Math.random() * 2)
      if (randomIndex === 0) {
        bookingCode += randomNumChar;
      } else {
        bookingCode += randomChar
      }    
    }
    return bookingCode; 
  }

  printReservation(): void {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);    
  }
}

let reserv1 = new Reservation();
reserv1.printReservation();
let reserv2 = new Reservation();
reserv2.printReservation();
let reserv3 = new Reservation();
reserv3.printReservation();
let reserv4 = new Reservation();
reserv4.printReservation();
let reserv5 = new Reservation();
reserv5.printReservation();
let reserv6 = new Reservation();
reserv6.printReservation();
let reserv7 = new Reservation();
reserv7.printReservation();
let reserv8 = new Reservation();
reserv8.printReservation();

/*instead of lots of console.log()-ing, I created another method in the class
console.log(`Booking# ${reserv1.getCodeBooking()} for ${reserv1.getDowBooking()}`);
console.log(`Booking# ${reserv2.getCodeBooking()} for ${reserv2.getDowBooking()}`);
console.log(`Booking# ${reserv3.getCodeBooking()} for ${reserv3.getDowBooking()}`);
console.log(`Booking# ${reserv4.getCodeBooking()} for ${reserv4.getDowBooking()}`);
console.log(`Booking# ${reserv5.getCodeBooking()} for ${reserv5.getDowBooking()}`);
console.log(`Booking# ${reserv6.getCodeBooking()} for ${reserv6.getDowBooking()}`);
console.log(`Booking# ${reserv7.getCodeBooking()} for ${reserv7.getDowBooking()}`);
console.log(`Booking# ${reserv8.getCodeBooking()} for ${reserv8.getDowBooking()}`);
*/
