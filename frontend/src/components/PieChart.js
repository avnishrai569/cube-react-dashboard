import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PieChartView() {
  const { resultSet, isLoading } = useCubeQuery({
    measures: ['Metrics.totalValue'],
    dimensions: ['Metrics.name']
  });

  if (isLoading) return <div>Loading...</div>;

  const data = resultSet.chartPivot().map((d, i) => ({
    name: d.x,
    value: d['Metrics.totalValue'],
  }));

  return (
    <PieChart width={600} height={300}>
      <Tooltip />
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}