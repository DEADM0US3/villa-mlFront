import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
  data: { mental_health_score: number; Avg_Daily_Usage_Hours: number }[];
  user?: {
    user_use_hours: number;
    predicted_mh: number;
    note: string;
  };
}

const AvgMhUse: React.FC<Props> = ({ data, user }) => {
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

    const usageHours = sorted.map((d) => d.Avg_Daily_Usage_Hours.toString());
    const mhScores = sorted.map((d) => d.mental_health_score);

    const userX = user ? user.user_use_hours.toString() : null;
    const userIndex = userX ? usageHours.indexOf(userX) : -1;

    const userPoint =
        user && userIndex !== -1
        ? [[userIndex, user.predicted_mh, user.note]]
        : [];

    const option = {
        tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
            if (params.seriesType === 'scatter') {
            return user?.note || `Uso: ${params.name}h<br/>Salud mental: ${params.value[1]}`;
            }
            return `Uso: ${params.name}h<br/>Salud mental: ${params.value}`;
        },
        },
        xAxis: {
        type: 'category',
        data: usageHours,
        name: 'Uso diario (horas)',
        },
        yAxis: {
        type: 'value',
        name: 'Salud mental',
        },
        series: [
        {
            type: 'bar',
            data: mhScores,
            itemStyle: { color: '#a020f0' },
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

export default AvgMhUse;
