import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
  data: {
    Age: number;
    mental_health_score: number;
  }[];
}

const AvgMhAge: React.FC<Props> = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-red-600 p-4">
        No hay datos disponibles para mostrar la gráfica.
      </div>
    );
  }

  const sorted = [...data].sort((a, b) => a.Age - b.Age);

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      name: 'Edad',
      nameLocation: 'middle',
      nameGap: 25,
      data: sorted.map((d) => d.Age),
    },
    yAxis: {
      type: 'value',
      name: 'Nivel de salud mental',
      nameLocation: 'middle',
      nameGap: 35,
      min: 0,
    },
    series: [
      {
        type: 'line',
        name: 'Salud Mental',
        data: sorted.map((d) => d.mental_health_score),
        smooth: true,
        lineStyle: {
          color: '#10B981',
        },
        itemStyle: {
          color: '#10B981',
        },
        symbol: 'circle',
        symbolSize: 6,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AvgMhAge;
