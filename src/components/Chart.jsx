import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Chart = ({ data, indicator }) => {
  const options = {
    title: {
      text: `Динамика показателя "${indicator}"`
    },
    xAxis: {
      categories: data.categories,
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Значение'
      },
      labels: {
        formatter: function() {
          return this.value.toLocaleString('ru-RU');
        }
      }
    },
    tooltip: {
      formatter: function() {
        return `<b>${this.x}</b><br/>${indicator}: ${this.y.toLocaleString('ru-RU')}`;
      }
    },
    series: [{
      type: 'line',
      name: indicator,
      data: data.data,
      color: '#10B981',
      marker: {
        enabled: true,
        radius: 6
      }
    }],
    credits: {
      enabled: false
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          formatter: function() {
            return this.y.toLocaleString('ru-RU');
          }
        }
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};