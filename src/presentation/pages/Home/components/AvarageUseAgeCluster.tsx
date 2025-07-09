import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
    data: { age_cluster: number; Avg_Daily_Usage_Hours: number }[];
    user?: {
        user_age: number;
        user_usage_hours: number;
        user_cluster: string;
        cluster_average_usage: number;
        comparison: string;
    };
}

const AverageUseAgeCluster: React.FC<Props> = ({ data, user }) => {
    const categories = data.map(d =>
        `Grupo ${
        d.age_cluster === 0
            ? '10 a 18'
            : d.age_cluster === 1
            ? '19 a 25'
            : '26 a 100'
        }`
    );

    const usageData = data.map(d => d.Avg_Daily_Usage_Hours);

    const userCategory =
        user?.user_cluster === '0'
        ? 'Grupo 10 a 18'
        : user?.user_cluster === '1'
        ? 'Grupo 19 a 25'
        : 'Grupo 26 a 100';

    const userIndex = user ? categories.indexOf(userCategory) : -1;

    const userPoint =
        user && userIndex !== -1
        ? [[userIndex, user.user_usage_hours, user.comparison]]
        : [];

    const option = {
        tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
            if (params.seriesType === 'scatter') {
            return user?.comparison || `Tú: ${params.value[1]}h`;
            }
            return `${params.name}: ${params.value}h`;
        },
        },
        xAxis: {
        type: 'category',
        data: categories,
        name: 'Grupo de edad',
        },
        yAxis: {
        type: 'value',
        name: 'Horas promedio',
        },
        series: [
        {
            type: 'bar',
            data: usageData,
            itemStyle: { color: '#6366f1' },
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

export default AverageUseAgeCluster;
