import {Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';
import {SingleOrMultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {
  chartType: Chart.ChartType = 'pie';
  data: SingleOrMultiDataSet = [71, 28, 0.9, 0.1];
  options: Chart.ChartOptions = {
    title: {
      text: 'Earth\'s Atmosphere',
      display: true
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
