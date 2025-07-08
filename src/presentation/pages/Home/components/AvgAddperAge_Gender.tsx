import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
  data: {
    Age: number;
    Gender: string;
    addicted_score: number;
  }[];
}

const BarAddictionByAgeGender: React.FC<Props> = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div className="text-red-600 text-center p-4">No hay datos disponibles.</div>;
  }

  const ages = Array.from(new Set(data.map(d => d.Age))).sort((a, b) => a - b);

  const grouped = ages.map(age => {
    const males = data.filter(d => d.Age === age && d.Gender === 'Male');
    const females = data.filter(d => d.Age === age && d.Gender === 'Female');

    const maleAvg = males.length > 0 ? males.reduce((sum, d) => sum + d.addicted_score, 0) / males.length : 0;
    const femaleAvg = females.length > 0 ? females.reduce((sum, d) => sum + d.addicted_score, 0) / females.length : 0;

    return {
      age: String(age),
      male: parseFloat(maleAvg.toFixed(2)),
      female: parseFloat(femaleAvg.toFixed(2))
    };
  });

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Hombres', 'Mujeres'],
      top: 'top'
    },
    xAxis: {
      type: 'category',
      data: grouped.map(g => g.age),
      name: 'Edad',
      nameLocation: 'middle',
      nameGap: 30,
      axisLabel: {
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: 'Nivel de adicción'
    },
    series: [
      {
        name: 'Hombres',
        type: 'bar',
        data: grouped.map(g => g.male),
        emphasis: { focus: 'series' },
        animationDelay: idx => idx * 10,
        itemStyle: { color: '#3B82F6' }
      },
      {
        name: 'Mujeres',
        type: 'bar',
        data: grouped.map(g => g.female),
        emphasis: { focus: 'series' },
        animationDelay: idx => idx * 10 + 100,
        itemStyle: { color: '#EC4899' }
      }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: idx => idx * 5
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default BarAddictionByAgeGender;
