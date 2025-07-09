import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    data: { Age: number; Predicted_Addiction: number }[];
    user?: {
        user_addicted_score: number;
        predicted_age: number;
        note: string;
    };
}

const AgePredictionGraphic: React.FC<Props> = ({ data, user }) => {
    const option = {
        tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
            if (params.seriesType === 'scatter') {
            return user?.note || `Edad predicha: ${params.value[0]}<br/>Puntuación: ${params.value[1]}`;
            }
            return `Edad: ${params.name}<br/>Predicción: ${params.value}`;
        },
        },
        xAxis: {
        type: 'category',
        name: 'Edad',
        data: data.map(d => d.Age),
        },
        yAxis: {
        type: 'value',
        name: 'Predicción de adicción',
        },
        series: [
        {
            data: data.map(d => d.Predicted_Addiction),
            type: 'line',
            smooth: true,
            itemStyle: { color: '#f59e0b' },
        },
        ...(user
            ? [
                {
                name: 'Tu puntuación',
                type: 'scatter',
                data: [[user.predicted_age, user.user_addicted_score]],
                symbolSize: 14,
                itemStyle: {
                    color: 'red',
                },
                label: {
                    show: true,
                    formatter: 'Tú',
                    position: 'top',
                },
                },
            ]
            : []),
        ],
    };

    return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AgePredictionGraphic;
