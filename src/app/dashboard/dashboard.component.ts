import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  // tslint:disable-next-line:member-ordering
  currentTime;

  composeDate() {
    console.log('inside clock');
    const thisMoment = new Date();
    let hours = thisMoment.getHours();
    let minutes = thisMoment.getMinutes();
    let seconds = thisMoment.getSeconds();

    // Adding leading zeros
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;

    this.currentTime = hours + ':' + minutes + ':' + seconds;
    //
    document.getElementById('watch').innerHTML = this.currentTime;
  }

  setInterval(this.composeDate(), 1000);

}
