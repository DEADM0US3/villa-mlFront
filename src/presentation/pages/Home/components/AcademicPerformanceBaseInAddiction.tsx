import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    data: { Academic_Level: string; addicted_score: number }[];
}

const AcademicPerformanceBaseInAddiction: React.FC<Props> = ({ data }) => {
    const option = {
        xAxis: {
            type: 'category',
            data: data.map(d => d.Academic_Level)
        },
        yAxis: {
            type: 'value',
            name: 'Nivel de adicción'
        },
        series: [
            {
                data: data.map(d => d.addicted_score),
                type: 'bar',
                itemStyle: { color: '#3b82f6' }
            }
        ]
    };

    return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AcademicPerformanceBaseInAddiction;
