import ReactECharts from 'echarts-for-react';


interface Props {
    data: { Age: number; Predicted_Addiction: number }[];
}

const AgePredictionGraphic: React.FC<Props> = ({ data }) => {
    const option = {
        xAxis: {
            type: 'category',
            name: 'Edad',
            data: data.map(d => d.Age)
        },
        yAxis: {
            type: 'value',
            name: 'Predicción de adicción'
        },
        series: [
            {
                data: data.map(d => d.Predicted_Addiction),
                type: 'line',
                smooth: true,
                itemStyle: { color: '#f59e0b' }
            }
        ]
    };

    return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AgePredictionGraphic;