import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { select } from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BarChartComponent implements OnInit {
  @ViewChild('barChart') private chartContainer!: ElementRef;
  @Input() private data?: Array<any>;

  seedData = [31, 64, 42, 28, 16, 32, 64, 10];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const element = this.chartContainer.nativeElement;
    const svg = select(element)
      .append('svg')
      .attr('viewBox', '0 0 200 100')
      .attr('preserveAspectRatio', 'xMinYMin meet');

    const bars = svg.append('g').attr('class', 'bars');

    bars
      .selectAll('rect')
      .data(this.data ? this.data : this.seedData)
      .enter()
      .append('rect')
      .attr('x', (d: any, i: any) => i * 25)
      .attr('y', (d: any) => 100 - d)
      .attr('width', 20)
      .attr('height', (d: any) => d);
  }
}
