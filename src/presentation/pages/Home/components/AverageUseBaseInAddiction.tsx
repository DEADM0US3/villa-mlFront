import ReactECharts from 'echarts-for-react';

interface Props {
    data: { Avg_Daily_Usage_Hours: number; addicted_score: number }[];
}

const AverageUseBaseInAddiction: React.FC<Props> = ({ data }) => {

    const option = {
        xAxis: {
            type: 'category',
            name: 'Horas diarias',
            data: data.map(d => d.Avg_Daily_Usage_Hours)
        },
        yAxis: {
            type: 'value',
            name: 'Adicción'
        },
        series: [
            {
                type: 'line',
                data: data.map(d => d.addicted_score),
                smooth: true,
                itemStyle: { color: '#ef4444' }
            },
                        {
                type: 'line',
                data: data.map(d => d.addicted_score),
                smooth: true,
                itemStyle: { color: '#ea4444' }
            }
        ]
    };

    return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AverageUseBaseInAddiction;