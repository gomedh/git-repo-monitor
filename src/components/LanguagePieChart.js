/* This component has the UI and logic to render the PieChart based upon the repo url */

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { CHART_COLORS, TOOLTIP_LABEL } from '../utils/constants';

const LanguagePieChart = ({ languages }) => {
  // Sorting logic to sort the programming languages and getting top 5 
  const sortedLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const data = sortedLanguages.map(([key, value], index) => ({
    name: key,
    value: value,
    color: CHART_COLORS[index % CHART_COLORS.length],
  }));

  // Covert the data of bytes received from api
  const totalBytes = data.reduce((total, entry) => total + entry.value, 0);

  return (
    // Pie chart UI logic
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* Tooltip, visible when the pie chart section is hovered with corresponding value in percentage */}
        <Tooltip 
          formatter={(value, name) => {
            const percentage = totalBytes > 0 ? ((value / totalBytes) * 100).toFixed(2) : 0;
            return [ `${name}: ${percentage}%`];
          }} 
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LanguagePieChart;
