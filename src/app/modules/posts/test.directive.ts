import { Directive, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[D3LineChart]'
})

export class D3LineChartDirective {

  constructor(private el: ElementRef) {
    this.createLineChart();
    d3.selectAll("p").style("color", "blue");
  }

  createLineChart() {
    var data = [];

    for (var i = 0; i < 20; i++) {
      var num = d3.randomUniform(1, 50)();
      data.push(num);
    }

    d3.select(this.el.nativeElement)
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .classed('bar', true)
      .style('height', function (d) {
        return d * 10 + "px";
      })
      .style('width', "32px")
      .style('display', 'inline-block')
      .style('background-color', '#7ED26D')
      .style('margin-left', '5px');
  }

}