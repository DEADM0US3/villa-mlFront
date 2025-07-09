import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
  data: { age_cluster: number; addicted_score: number }[];
  user?: AgeClusterComparison; // optional user data
}

const AgeClusterAddictionWithUserDot: React.FC<Props> = ({ data, user }) => {
  const categories = data.map(d =>
    `Grupo ${
      d.age_cluster === 0
        ? '10 a 18'
        : d.age_cluster === 1
        ? '19 a 25'
        : '26 a 100'
    }`
  );

  const userCategoryLabel = user
    ? `Grupo ${
        user.user_cluster === '0'
          ? '10 a 18'
          : user.user_cluster === '1'
          ? '19 a 25'
          : '26 a 100'
      }`
    : null;

  const userIndex = userCategoryLabel ? categories.indexOf(userCategoryLabel) : -1;

  const userPoint =
    userIndex !== -1
      ? [[userIndex, user.user_score, user.user_age, user.comparison]]
      : [];

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        if (params.seriesType === 'scatter') {
          return `Edad: ${params.data[2]}<br/>Tu puntuación: ${params.data[1]}<br/>Comparación: ${params.data[3]}`;
        }
        return `${params.name}: ${params.value}`;
      },
    },
    xAxis: {
      type: 'category',
      data: categories,
      name: 'Grupo de edad',
    },
    yAxis: {
      type: 'value',
      name: 'Nivel de adicción',
    },
    series: [
      {
        type: 'bar',
        data: data.map(d => d.addicted_score),
        itemStyle: { color: '#10b981' },
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

export default AgeClusterAddictionWithUserDot;
