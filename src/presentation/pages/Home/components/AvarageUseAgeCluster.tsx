import ReactECharts from 'echarts-for-react';

interface Props {
    data: { age_cluster: number; Avg_Daily_Usage_Hours: number }[];
}

const AverageUseAgeCluster: React.FC<Props> = ({ data }) => {
    const option = {
        xAxis: {
            type: 'category',
            data: data.map(d => `Grupo ${d.age_cluster == 0 ? "10 a 18" : d.age_cluster== 1 ? "19 a 25" : "26 a 100"}`)
        },
        yAxis: {
            type: 'value',
            name: 'Horas promedio'
        },
        series: [
            {
                type: 'bar',
                data: data.map(d => d.Avg_Daily_Usage_Hours),
                itemStyle: { color: '#6366f1' }
            }
        ]
    };

    return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AverageUseAgeCluster;