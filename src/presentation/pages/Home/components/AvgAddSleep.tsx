import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface Props {
  data: {
    Sleep_Hours_Per_Night: number;
    addicted_score: number;
  }[];
}

const AddictionBySleepChart: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-red-600 p-4">
        No hay datos disponibles para mostrar la gráfica.
      </div>
    );
  }

  const sorted = [...data].sort((a, b) => a.Sleep_Hours_Per_Night - b.Sleep_Hours_Per_Night);
  const sleepHours = sorted.map(d => d.Sleep_Hours_Per_Night.toString() + 'h');
  const addictionScores = sorted.map(d => Number(d.addicted_score.toFixed(2)));

  const option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt: number[]) {
        return [pt[0], '10%'];
      }
    },
    toolbox: {

    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      name: 'Horas de sueño',
      data: sleepHours
    },
    yAxis: {
      type: 'value',
      name: 'Nivel de adicción',
      boundaryGap: [0, '10%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100
      },
      {
        start: 0,
        end: 100
      }
    ],
    series: [
      {
        name: 'Adicción',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255, 158, 68, 0.8)' },
            { offset: 1, color: 'rgba(255, 70, 131, 0.1)' }
          ])
        },
        data: addictionScores
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default AddictionBySleepChart;
