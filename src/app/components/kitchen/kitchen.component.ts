import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import * as $ from 'jquery';
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';
import { Data } from 'src/app/data';
import { DataService } from 'src/app/data.service';
import { RouterModule } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'kitchen-root',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class AppComponent implements OnInit {
  public data: Data[];
  now: string;
  countdownTimer: any;
  kitchenTimer: any;
  officeTimer: any;
  barTimer: any;
  timestamp = [];
  temperature = [];
  gas = [];
  pres = [];
  hum = [];
  score = [];
  location = [];
  sortedTimestamp: any;
  formattedTime = [];
  kitchenavg = [];
  kitchenhouravg = [];

  constructor(private dataService: DataService) {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }

  ngOnInit() {
    this.getOfficeData();
    this.timestamp = [];
    this.temperature = [];
    this.gas = [];
    this.pres = [];
    this.hum = [];
    this.score = [];
    this.location = [];
    this.formattedTime = [];
    this.kitchenavg = [];
    this.kitchenhouravg = [];
    clearInterval(this.officeTimer);
    clearInterval(this.barTimer);
    clearInterval(this.kitchenTimer);
    clearInterval(this.countdownTimer);
    this.startTimer();
    $('#last-recorded').html('DATA LOADING..');
    this.kitchenTimer = setInterval(() => {
      clearInterval(this.countdownTimer);
      this.getOfficeData();
      this.startTimer();
    }, 60000);
  }

  public kitchenFunc() {
    this.timestamp = [];
    this.temperature = [];
    this.gas = [];
    this.pres = [];
    this.hum = [];
    this.score = [];
    this.location = [];
    this.formattedTime = [];
    this.kitchenavg = [];
    this.kitchenhouravg = [];
    clearInterval(this.officeTimer);
    clearInterval(this.barTimer);
    clearInterval(this.kitchenTimer);
    clearInterval(this.countdownTimer);
    this.startTimer();
    $('#last-recorded').html('DATA LOADING..');
    this.kitchenTimer = setInterval(() => {
      clearInterval(this.countdownTimer);
      this.getKitchenData();
      this.startTimer();
    }, 60000);
  }

  public officeFunc() {
    this.timestamp = [];
    this.temperature = [];
    this.gas = [];
    this.pres = [];
    this.hum = [];
    this.score = [];
    this.location = [];
    this.formattedTime = [];
    this.kitchenavg = [];
    this.kitchenhouravg = [];
    clearInterval(this.officeTimer);
    clearInterval(this.barTimer);
    clearInterval(this.kitchenTimer);
    clearInterval(this.countdownTimer);
    $('#last-recorded').html('DATA LOADING...');
    this.startTimer();
    this.officeTimer = setInterval(() => {
      clearInterval(this.countdownTimer);
      this.getOfficeData();
      this.startTimer();
    }, 60000);
  }

  public barFunc() {
    this.timestamp = [];
    this.temperature = [];
    this.gas = [];
    this.pres = [];
    this.hum = [];
    this.score = [];
    this.location = [];
    this.formattedTime = [];
    this.kitchenavg = [];
    this.kitchenhouravg = [];
    clearInterval(this.officeTimer);
    clearInterval(this.barTimer);
    clearInterval(this.kitchenTimer);
    clearInterval(this.countdownTimer);
    $('#last-recorded').html('DATA LOADING...');
    this.startTimer();
    this.barTimer = setInterval(() => {
      clearInterval(this.countdownTimer);
      this.getBarData();
      this.startTimer();
    }, 60000);
  }

  public stopDataFunc() {
    clearInterval(this.kitchenTimer);
    clearInterval(this.officeTimer);
    clearInterval(this.barTimer);
    clearInterval(this.countdownTimer);
    $('#last-recorded').html('LIVE DATA STOPPED');
  }

  counter: { sec: number };

  public startTimer() {
    this.counter = { sec: 60 }; // choose whatever you want
    this.countdownTimer = setInterval(() => {
      if (this.counter.sec - 1 == -1) {
        this.counter.sec = 59;
      } else this.counter.sec -= 1;
      if (this.counter.sec == 0) clearInterval(this.countdownTimer);
    }, 1000);
  }

  public getKitchenData() {
    this.dataService.getKitchenData().subscribe((response: Data[]) => {
      this.data = response;
      for (var i in response) {
        this.timestamp.push(response[i].timestamp);
        this.temperature.push(response[i].temp);
        this.gas.push(response[i].gas);
        this.pres.push(response[i].pres);
        this.hum.push(response[i].hum);
        this.score.push(response[i].score);
        this.location.push(response[i].location);
        this.kitchenavg.push(response[i].kitchenavg);
        this.kitchenhouravg.push(response[i].kitchenhouravg);
        this.formattedTime.push(
          moment(
            this.timestamp[this.timestamp.length - 1],
            'YYYY-MM-DD HH:mm:ss'
          ).fromNow()
        );

        $('#temp').html(
          this.temperature[this.temperature.length - 1] + '\u00B0C'
        );
        $('#hum').html(this.hum[this.hum.length - 1] + '%');
        $('#pres').html(this.pres[this.pres.length - 1] + 'hPa');
        $('#gas').html(this.gas[this.gas.length - 1] + 'k&#8486;');
        $('#kitchenavg').html(
          this.kitchenavg[this.kitchenavg.length - 1] + 'k&#8486;'
        );
        $('#kitchenhouravg').html(
          this.kitchenhouravg[this.kitchenhouravg.length - 1] + 'k&#8486;'
        );
        $('#score').html(this.score[this.score.length - 1] + ' IAQ');
        $('#last-recorded').html(
          this.formattedTime[this.formattedTime.length - 1]
        );

        $('#location').html(this.location[this.location.length - 1]);

        /* IAQ Alerts according BME680 datasheet */
        if (this.score[this.score.length - 1] <= 50) {
          $('#IAQ-box').html(
            '<div class="alert alert-success" role="alert">Air Quality - Good!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 51 &&
          this.score[this.score.length - 1] <= 100
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-success" role="alert">Air Quality - Average!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 101 &&
          this.score[this.score.length - 1] <= 150
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-warning" role="alert">Air Quality - Unhealthy for Sensitive Groups!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 151 &&
          this.score[this.score.length - 1] <= 200
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-warning" role="alert">Air Quality - Unhealthy!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 201 &&
          this.score[this.score.length - 1] <= 300
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-danger" role="alert">Air Quality - Very Unhealthy!</div>'
          );
        } else if (this.score[this.score.length - 1] >= 301) {
          $('#IAQ-box').html(
            '<div class="alert alert-danger" role="alert">Air Quality - Hazardous!</div>'
          );
        }

        if (this.timestamp.length == 60) {
          this.timestamp.shift();
        }

        if (this.temperature.length == 60) {
          this.temperature.shift();
        }
        if (this.hum.length == 60) {
          this.hum.shift();
        }
        if (this.pres.length == 60) {
          this.pres.shift();
        }
        if (this.gas.length == 60) {
          this.gas.shift();
        }
        if (this.score.length == 60) {
          this.score.shift();
        }
      }

      var tempGraph = new Chart('tempGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Temperature Data (\u00B0C)',
              backgroundColor: '#0275d8',
              borderColor: '#0275d8',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.temperature,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var presGraph = new Chart('presGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Pressure Data (hPa)',
              backgroundColor: '#5cb85c',
              borderColor: '#5cb85c',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.pres,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var humGraph = new Chart('humGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Humidity Data (%)',
              backgroundColor: '#5bc0de',
              borderColor: '#5bc0de',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.hum,
              fill: false,
            },
          ],
        },
        options: {
          animation: false,
        },
      });

      var gasGraph = new Chart('gasGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Gas Resistance (k\u2126)',
              backgroundColor: '#f0ad4e',
              borderColor: '#f0ad4e',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.gas,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var scoreGraph = new Chart('scoreGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'IAQ Score',
              backgroundColor: '#ff0000',
              borderColor: '#ff0000',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.score,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });
    });
  }

  public getOfficeData() {
    this.dataService.getOfficeData().subscribe((response: Data[]) => {
      this.data = response;
      for (var i in response) {
        this.timestamp.push(response[i].timestamp);
        this.temperature.push(response[i].temp);
        this.gas.push(response[i].gas);
        this.pres.push(response[i].pres);
        this.hum.push(response[i].hum);
        this.score.push(response[i].score);
        this.location.push(response[i].location);
        this.kitchenavg.push(response[i].kitchenavg);
        this.kitchenhouravg.push(response[i].kitchenhouravg);
        this.formattedTime.push(
          moment(
            this.timestamp[this.timestamp.length - 1],
            'YYYY-MM-DD HH:mm:ss'
          ).fromNow()
        );

        $('#temp').html(
          this.temperature[this.temperature.length - 1] + '\u00B0C'
        );
        $('#hum').html(this.hum[this.hum.length - 1] + '%');
        $('#pres').html(this.pres[this.pres.length - 1] + 'hPa');
        $('#gas').html(this.gas[this.gas.length - 1] + 'k&#8486;');
        $('#kitchenavg').html(
          this.kitchenavg[this.kitchenavg.length - 1] + 'k&#8486;'
        );
        $('#kitchenhouravg').html(
          this.kitchenhouravg[this.kitchenhouravg.length - 1] + 'k&#8486;'
        );
        $('#score').html(this.score[this.score.length - 1] + ' IAQ');
        $('#last-recorded').html(
          this.formattedTime[this.formattedTime.length - 1]
        );
        $('#location').html(this.location[this.location.length - 1]);

        /* IAQ Alerts according BME680 datasheet */
        if (this.score[this.score.length - 1] <= 50) {
          $('#IAQ-box').html(
            '<div class="alert alert-success" role="alert">Air Quality - Good!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 51 &&
          this.score[this.score.length - 1] <= 100
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-success" role="alert">Air Quality - Average!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 101 &&
          this.score[this.score.length - 1] <= 150
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-warning" role="alert">Air Quality - Unhealthy for Sensitive Groups!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 151 &&
          this.score[this.score.length - 1] <= 200
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-warning" role="alert">Air Quality - Unhealthy!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 201 &&
          this.score[this.score.length - 1] <= 300
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-danger" role="alert">Air Quality - Very Unhealthy!</div>'
          );
        } else if (this.score[this.score.length - 1] >= 301) {
          $('#IAQ-box').html(
            '<div class="alert alert-danger" role="alert">Air Quality - Hazardous!</div>'
          );
        }

        if (this.timestamp.length == 60) {
          this.timestamp.shift();
        }

        if (this.temperature.length == 60) {
          this.temperature.shift();
        }
        if (this.hum.length == 60) {
          this.hum.shift();
        }
        if (this.pres.length == 60) {
          this.pres.shift();
        }
        if (this.gas.length == 60) {
          this.gas.shift();
        }
        if (this.score.length == 60) {
          this.score.shift();
        }
      }

      var tempGraph = new Chart('tempGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Temperature Data (\u00B0C)',
              backgroundColor: '#0275d8',
              borderColor: '#0275d8',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.temperature,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var presGraph = new Chart('presGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Pressure Data (hPa)',
              backgroundColor: '#5cb85c',
              borderColor: '#5cb85c',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.pres,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var humGraph = new Chart('humGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Humidity Data (%)',
              backgroundColor: '#5bc0de',
              borderColor: '#5bc0de',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.hum,
              fill: false,
            },
          ],
        },
        options: {
          animation: false,
        },
      });

      var gasGraph = new Chart('gasGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Gas Resistance (k\u2126)',
              backgroundColor: '#f0ad4e',
              borderColor: '#f0ad4e',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.gas,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var scoreGraph = new Chart('scoreGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'IAQ Score',
              backgroundColor: '#ff0000',
              borderColor: '#ff0000',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.score,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });
    });
  }

  public getBarData() {
    this.dataService.getBarData().subscribe((response: Data[]) => {
      this.data = response;
      for (var i in response) {
        this.timestamp.push(response[i].timestamp);
        this.temperature.push(response[i].temp);
        this.gas.push(response[i].gas);
        this.pres.push(response[i].pres);
        this.hum.push(response[i].hum);
        this.score.push(response[i].score);
        this.location.push(response[i].location);
        this.kitchenavg.push(response[i].kitchenavg);
        this.kitchenhouravg.push(response[i].kitchenhouravg);
        this.formattedTime.push(
          moment(
            this.timestamp[this.timestamp.length - 1],
            'YYYY-MM-DD HH:mm:ss'
          ).fromNow()
        );

        $('#temp').html(
          this.temperature[this.temperature.length - 1] + '\u00B0C'
        );
        $('#hum').html(this.hum[this.hum.length - 1] + '%');
        $('#pres').html(this.pres[this.pres.length - 1] + 'hPa');
        $('#gas').html(this.gas[this.gas.length - 1] + 'k&#8486;');
        $('#kitchenavg').html(
          this.kitchenavg[this.kitchenavg.length - 1] + 'k&#8486;'
        );
        $('#kitchenhouravg').html(
          this.kitchenhouravg[this.kitchenhouravg.length - 1] + 'k&#8486;'
        );
        $('#score').html(this.score[this.score.length - 1] + ' IAQ');
        $('#last-recorded').html(
          this.formattedTime[this.formattedTime.length - 1]
        );
        $('#location').html(this.location[this.location.length - 1]);

        /* IAQ Alerts according BME680 datasheet */
        if (this.score[this.score.length - 1] <= 50) {
          $('#IAQ-box').html(
            '<div class="alert alert-success" role="alert">Air Quality - Good!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 51 &&
          this.score[this.score.length - 1] <= 100
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-success" role="alert">Air Quality - Average!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 101 &&
          this.score[this.score.length - 1] <= 150
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-warning" role="alert">Air Quality - Unhealthy for Sensitive Groups!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 151 &&
          this.score[this.score.length - 1] <= 200
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-warning" role="alert">Air Quality - Unhealthy!</div>'
          );
        } else if (
          this.score[this.score.length - 1] >= 201 &&
          this.score[this.score.length - 1] <= 300
        ) {
          $('#IAQ-box').html(
            '<div class="alert alert-danger" role="alert">Air Quality - Very Unhealthy!</div>'
          );
        } else if (this.score[this.score.length - 1] >= 301) {
          $('#IAQ-box').html(
            '<div class="alert alert-danger" role="alert">Air Quality - Hazardous!</div>'
          );
        }

        if (this.timestamp.length == 60) {
          this.timestamp.shift();
        }

        if (this.temperature.length == 60) {
          this.temperature.shift();
        }
        if (this.hum.length == 60) {
          this.hum.shift();
        }
        if (this.pres.length == 60) {
          this.pres.shift();
        }
        if (this.gas.length == 60) {
          this.gas.shift();
        }
        if (this.score.length == 60) {
          this.score.shift();
        }
      }

      var tempGraph = new Chart('tempGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Temperature Data (\u00B0C)',
              backgroundColor: '#0275d8',
              borderColor: '#0275d8',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.temperature,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var presGraph = new Chart('presGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Pressure Data (hPa)',
              backgroundColor: '#5cb85c',
              borderColor: '#5cb85c',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.pres,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var humGraph = new Chart('humGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Humidity Data (%)',
              backgroundColor: '#5bc0de',
              borderColor: '#5bc0de',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.hum,
              fill: false,
            },
          ],
        },
        options: {
          animation: false,
        },
      });

      var gasGraph = new Chart('gasGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'Gas Resistance (k\u2126)',
              backgroundColor: '#f0ad4e',
              borderColor: '#f0ad4e',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.gas,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });

      var scoreGraph = new Chart('scoreGraph', {
        type: 'line',
        data: {
          labels: this.timestamp,
          datasets: [
            {
              label: 'IAQ Score',
              backgroundColor: '#ff0000',
              borderColor: '#ff0000',
              hoverBackgroundColor: '#CCCCCC',
              hoverBorderColor: '#666666',
              data: this.score,
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // general animation time
          },
        },
      });
    });
  }
}
