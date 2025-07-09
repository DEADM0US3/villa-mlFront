import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    data: { Avg_Daily_Usage_Hours: number; addicted_score: number }[];
    user?: {
        user_addicted_score: number;
        predicted_use: number;
        note: string;
    };
    }

const AverageUseBaseInAddiction: React.FC<Props> = ({ data, user }) => {
    if (!data || data.length === 0) {
        return (
        <div className="text-center text-red-600 p-4">
            No hay datos disponibles para mostrar la gráfica.
        </div>
        );
    }

    const sorted = [...data].sort(
        (a, b) => a.Avg_Daily_Usage_Hours - b.Avg_Daily_Usage_Hours
    );

    const usage = sorted.map(d => d.Avg_Daily_Usage_Hours.toString());
    const scores = sorted.map(d => d.addicted_score);

    const userPoint = user
        ? [[user.predicted_use, user.user_addicted_score, user.note]]
        : [];

    const option = {
        tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
            if (params.seriesType === 'scatter') {
            return user?.note || `Uso: ${params.value[0]}h<br/>Adicción: ${params.value[1]}`;
            }
            return `Uso: ${params.name}h<br/>Adicción: ${params.value}`;
        },
        },
        xAxis: {
        type: 'category',
        name: 'Horas diarias',
        data: usage,
        },
        yAxis: {
        type: 'value',
        name: 'Adicción',
        },
        series: [
        {
            type: 'line',
            data: scores,
            smooth: true,
            itemStyle: { color: '#ef4444' },
        },
        ...(userPoint.length > 0
            ? [
                {
                type: 'scatter',
                data: userPoint,
                symbolSize: 14,
                itemStyle: { color: 'red' },
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

export default AverageUseBaseInAddiction;
