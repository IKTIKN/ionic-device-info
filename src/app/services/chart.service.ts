import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';

@Injectable({
    providedIn: 'root'
})
export class ChartService {
    diskChartOption!: EChartsOption;
    batteryChartOption!: EChartsOption;

    constructor() { }

    setChart(data: any, radius: any): EChartsOption {
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: false
            },
            series: [
                {
                    type: 'pie',
                    radius: radius,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: data
                }
            ]
        };
    }
}