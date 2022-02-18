import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() dr: any

  constructor() { }

  ngOnInit(): void { }

  title = 'Angular';
  btn = "Book an appointment with the doctor"
  statuse = true;
  loading() {
    this.statuse = false;
    this.btn = "Booking an appointment with the doctor......";

    setTimeout(() => {
      this.statuse = true;
      this.btn = "Booking an appointment with the doctor is done";
    }, 5000);

  }


}
