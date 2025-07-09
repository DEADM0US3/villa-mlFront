import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
  data: {
    Age: number;
    mental_health_score: number;
  }[];
  user?: {
    user_Age: number;
    predicted_mh: number;
    note: string;
  };
}

const AvgMhAge: React.FC<Props> = ({ data, user }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-red-600 p-4">
        No hay datos disponibles para mostrar la gráfica.
      </div>
    );
  }

  const sorted = [...data].sort((a, b) => a.Age - b.Age);
  const ages = sorted.map((d) => d.Age);

  const userIndex = user ? ages.indexOf(user.user_Age) : -1;

  const userPoint =
    user && userIndex !== -1
      ? [
          {
            type: 'scatter',
            name: 'Tú',
            data: [[user.user_Age, user.predicted_mh]],
            symbolSize: 14,
            itemStyle: { color: 'green' },
            label: {
              show: true,
              formatter: 'Tú',
              position: 'top',
            },
            tooltip: {
              formatter: user.note,
            },
          },
        ]
      : [];

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      name: 'Edad',
      nameLocation: 'middle',
      nameGap: 25,
      data: ages,
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
      ...userPoint,
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AvgMhAge;
