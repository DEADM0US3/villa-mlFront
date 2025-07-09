import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    data: { mental_health_score: number, Avg_Daily_Usage_Hours: number }[];
}

const AvgMhUse: React.FC<Props> = ({ data }) => {
    const option = {
        xAxis: {
            type: 'category',
            data: data.map(d => d.Avg_Daily_Usage_Hours),
            name: 'Uso diario'
        },
        yAxis: {
            type: 'value',
            name: 'Salud mental'
        },
        series: [
            {
                data: data.map(d => d.mental_health_score),
                type: 'bar',
                itemStyle: { color: '#a020f0' }
            }
        ]
    };

    return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AvgMhUse;
