import ReactECharts from 'echarts-for-react';


interface Props {
    data: { age_cluster: number; addicted_score: number }[];
}

const AgeClusterAddiction: React.FC<Props> = ({ data }) => {
    const option = {
        xAxis: {
            type: 'category',
            data: data.map(d => `Grupo ${d.age_cluster == 0 ? "10 a 18" : d.age_cluster== 1 ? "19 a 25" : "26 a 100" }`)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                data: data.map(d => d.addicted_score),
                itemStyle: { color: '#10b981' }
            }
        ]
    };

    return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AgeClusterAddiction;
