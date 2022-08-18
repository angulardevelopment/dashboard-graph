import { ElementRef } from '@angular/core';
import { D3LineChartDirective } from './test.directive';

describe('TestDirective', () => {
  it('should create an instance', () => {
    const directive = new D3LineChartDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
