import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CowinService } from '../cowin.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  resultData: any = [];

  intervalId = 0;
  seconds = 240;
  districtRef = 509;
  dateRef = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  time: number=0;
  constructor(private CowinService: CowinService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    // this.getStatus();
  }

  getStatus(userChoice: any) {
    // this.resultData = this.aa.filter(
    //   (data: any) => data.sessions[0]['available_capacity_dose1'] > 0
    // );
    this.CowinService.checkVaccine(userChoice).subscribe((res) => {
      // console.log('data response', res.centers);
      this.getCurrentTime();
      this.resultData = res.centers.filter(
        (data: any) =>
          data.sessions[0]['min_age_limit'] == 18 &&
          data.sessions[0]['available_capacity_dose1'] > 0 ||data.sessions[0]['available_capacity_dose2'] > 0
      );
    });
  }
  getCurrentTime() {
    this.time =  Date.now();
   }
  checkNow(val: any) {
    // console.log('val ', val);
    let inputDate = val.date.date.split('-');
    inputDate = inputDate[2] + '-' + inputDate[1] + '-' + inputDate[0];
    let para = {
      date: inputDate,
      districtId: val.districtId,
    };
    // console.log(para);
    this.getStatus(para);
    this.startTimer();
    this.getCurrentTime();
    setInterval(() => {
      this.getStatus(para);

    // }, 5000);
    }, 240000);
  }

  startTimer() {
    this.seconds = 240;
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;

      if (this.seconds < 0) {
        this.seconds = 240;
      } // reset
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
}
