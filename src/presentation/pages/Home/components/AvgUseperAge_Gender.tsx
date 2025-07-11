import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Props {
  data: {
    Age: number;
    Gender: string;
    Avg_Daily_Usage_Hours: number;
  }[];
}

const AvgUseperAge_Gender: React.FC<Props> = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-red-600 p-4">
        No hay datos disponibles para mostrar la gráfica.
      </div>
    );
  }

  const first = data[0];
  if (
    typeof first.Age !== 'number' ||
    typeof first.Gender !== 'string' ||
    typeof first.Avg_Daily_Usage_Hours !== 'number'
  ) {
    return (
      <div className="text-center text-red-600 p-4">
        El formato de los datos es incorrecto.
      </div>
    );
  }

const sortedData = [...data].sort((a, b) => a.Age - b.Age);

const option = {
  dataset: [
    {
      id: 'raw',
      source: sortedData,
    },
    {
      id: 'male',
      fromDatasetId: 'raw',
      transform: {
        type: 'filter',
        config: {
          and: [{ dimension: 'Gender', '=': 'Male' }]
        }
      }
    },
    {
      id: 'female',
      fromDatasetId: 'raw',
      transform: {
        type: 'filter',
        config: {
          and: [{ dimension: 'Gender', '=': 'Female' }]
        }
      }
    }
  ],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: 'top'
  },
  xAxis: {
    type: 'value',
    name: 'Edad'
  },
  yAxis: {
    type: 'value',
    name: 'Horas diarias de uso',
  },
  series: [
    {
      type: 'line',
      name: 'Hombres',
      datasetId: 'male',
      showSymbol: false,
      smooth: true,
      encode: {
        x: 'Age',
        y: 'Avg_Daily_Usage_Hours',
        tooltip: ['Avg_Daily_Usage_Hours']
      },
      itemStyle: { color: '#3B82F6' }
    },
    {
      type: 'line',
      name: 'Mujeres',
      datasetId: 'female',
      showSymbol: false,
      smooth: true,
      encode: {
        x: 'Age',
        y: 'Avg_Daily_Usage_Hours',
        tooltip: ['Avg_Daily_Usage_Hours']
      },
      itemStyle: { color: '#EC4899' }
    }
  ]
};

  try {
    return <ReactECharts option={option} style={{ height: 300 }} />;
  } catch (error) {
    console.error('ECharts render error:', error);
    return (
      <div className="text-center text-red-600 p-4">
        Error al renderizar la gráfica.
      </div>
    );
  }
};

export default AvgUseperAge_Gender;
