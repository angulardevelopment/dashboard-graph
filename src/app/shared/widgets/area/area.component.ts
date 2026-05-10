import { Component, OnInit, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';
import 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  standalone: true,
  imports: [HighchartsChartComponent,],
  schemas: [NO_ERRORS_SCHEMA]


})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];


    Highcharts: typeof Highcharts = Highcharts; // Required property


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Random DATA'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };

    // Exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
