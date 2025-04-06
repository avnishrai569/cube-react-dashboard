import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function BarChartView() {
  const { resultSet, isLoading } = useCubeQuery({
    measures: ['Metrics.totalValue'],
    dimensions: ['Metrics.name']
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <BarChart width={600} height={300} data={resultSet.chartPivot()}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Metrics.totalValue" fill="#82ca9d" />
    </BarChart>
  );
}