import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Chart } from './Chart';

export const Table = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const getChartData = (row) => {
    return {
      data: [row.lastWeek, row.yesterday, row.today],
      categories: ['Прошлая неделя', 'Вчера', 'Сегодня']
    };
  };

  return (
    <div className="overflow-hidden">
      <table className="min-w-full bg-gray-100 divide-y-4 divide-white">
        <thead>
          <tr className="bg-gray-100 divide-x-4 divide-white">
            <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Показатель</th>
            <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 bg-sky-100">Текущий день</th>
            <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Вчера</th>
            <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Этот день неделя</th>
          </tr>
        </thead>
        <tbody className="divide-y-4 divide-white">
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr
                onClick={() => handleRowClick(index)}
                className="cursor-pointer hover:bg-gray-50 transition-colors divide-x-4 divide-white"
              >
                <td className="px-6 py-4 text-sm text-gray-900">{row.indicator}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-900 bg-sky-100">
                  {row.today.toLocaleString()}
                </td>
                <td className={clsx(
                  "px-6 py-4 text-right text-sm",
                  row.change > 0 ? "text-green-600 bg-green-100" : row.change < 0 ? "text-red-600 bg-rose-100" : "text-gray-900"
                )}>
                  {row.yesterday.toLocaleString()}
                  {row.change !== 0 && (
                    <span className="ml-2 font-bold">{row.change > 0 ? '+' : ''}{row.change}%</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right text-sm text-gray-900">
                  {row.lastWeek.toLocaleString()}
                </td>

              </tr>
              {expandedRow === index && (
                <tr>
                  <td colSpan="5" className="p-4 bg-gray-50">
                    <Chart data={getChartData(row)} indicator={row.indicator} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};