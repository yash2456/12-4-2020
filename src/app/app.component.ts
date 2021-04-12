import { Component } from '@angular/core';
import { BarchService } from './barch.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '';
  tab: any;
  weekDays: any = [];
  difference: any
  currentWeekTotal: any
  data1 = [

    ["9am", 45, 55],
    ["10am", 25, 55],
    ["11am", 45, 75],
    ["12pm", 55, 55],
    ["1pm", 45, 55],
    ["2pm", 35, 45],
    ["3pm", 45, 55],
    ["4pm", 35, 25],
    ["5pm", 45, 55],
    ["6pm", 15, 35],
    ["7pm", 45, 55],
    ["8pm", 25, 25],
    ["9pm", 45, 55],
  ];
  constructor(public bar: BarchService) {
    this.getWeeksDays();

    this.changeToSeries(new Date().toLocaleString('en-us', { weekday: 'short' }), '');
  }

  type: any = 'ColumnChart';
  data = this.data1

  options = {

    colors: ['#719eef', '#c5c5c5'],
    borderradius: 5,
    vAxis: { textPosition: 'none', gridlines: { count: 0 } },
    bar: { groupWidth: '80%' },


  };

  width = 1000;
  height = 450;



  getWeeksDays() {
    var first = this.startOfWeek(new Date());
    for (let i = 0; i < 7; i++) {
      let curr = new Date();
      curr.setDate(first.getDate() + i);
      this.weekDays.push({ Day: new Date(curr).toLocaleString('en-us', { weekday: 'short' }), Date: curr });
    }
  }

  startOfWeek(date: any) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }


  changeToSeries(day: string, date: string) {
    console.log(date);
    this.bar.getdata(day).subscribe((data: any) => {

      this.data = this.data1;
      console.log(data);

      //current total
      var currentWeekTotal = data[0].data.reduce((i: any, r: any) => {
        return i + r
      })
      console.log(currentWeekTotal, "curre");
      this.currentWeekTotal = currentWeekTotal

      //last week total
      var lastWeekTotal = data[1].data.reduce((i: any, r: any) => {
        return i + r
      });
      console.log(lastWeekTotal, "last");

      var difference = Math.round(((currentWeekTotal / (lastWeekTotal <= 0 ? 1 : lastWeekTotal) * 100.00) - 100) * 100) / 100;


      this.difference = difference;

    });


    this.tab = day;
  }
}



