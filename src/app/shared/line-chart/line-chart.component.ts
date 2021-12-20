import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { select } from 'd3';

interface lineChartObject {
  date: Date;
  value: number;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() private data?: Array<{ value: number; date: string }>; // any[], Array<any>
  @ViewChild('lineChart') private chartContainer!: ElementRef;

  seedData: lineChartObject[] = [
    { date: new Date('2007-04-23'), value: 93.24 },
    { date: new Date('2007-04-24'), value: 93.24 },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const element = this.chartContainer.nativeElement;
    const svg = select(element)
      .append('svg')
      .attr('viewBox', '0 0 200 100')
      .attr('preserveAspectRatio', 'xMinYMin meet');
  }
}
