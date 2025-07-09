import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { AcademicAddiction } from '../../../../contracts/form/PersonalDtos/academicAddiction';

interface Props {
    data: { Academic_Level: string; addicted_score: number }[];
    user?: AcademicAddiction;
    }

const AcademicPerformanceBaseInAddiction: React.FC<Props> = ({ data, user }) => {
    const categories = data.map(d => d.Academic_Level);
    const barData = data.map(d => d.addicted_score);


    const userIndex = user
        ? categories.findIndex(
            level => level.trim().toLowerCase() === user.user_academic_level.trim().toLowerCase()
        )
        : -1;

    const userPoint = user && userIndex !== -1
        ? [[userIndex, user.user_addicted_score]]
        : [];


    const option = {
        tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
            if (params.seriesType === 'scatter') {
            return `Tú: ${params.value[1]}`;
            }
            return `${params.name}: ${params.value}`;
        },
        },
        xAxis: {
        type: 'category',
        data: categories,
        },
        yAxis: {
        type: 'value',
        name: 'Nivel de adicción',
        },
        series: [
        {
            name: 'Promedio por nivel',
            data: barData,
            type: 'bar',
            itemStyle: { color: '#3b82f6' },
        },
        ...(userPoint.length > 0
            ? [
                {
                name: 'Tu puntuación',
                type: 'scatter',
                data: userPoint,
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

export default AcademicPerformanceBaseInAddiction;
