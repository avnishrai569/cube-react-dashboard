import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import cubejs from '@cubejs-client/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const API_URL = 'http://localhost:4000/cubejs-api/v1';
const cubejsApi = cubejs('secret', { apiUrl: `${API_URL}` });

export default function LineChartView() {
  const { resultSet, isLoading } = useCubeQuery({
    measures: ['Metrics.totalValue'],
    timeDimensions: [{
      dimension: 'Metrics.timestamp',
      granularity: 'day'
    }],
    dimensions: ['Metrics.name']
  }, { cubejsApi });

  if (isLoading) return <div>Loading...</div>;

  const data = resultSet.chartPivot();

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      {resultSet.seriesNames().map(({ key }) => (
        <Line type="monotone" dataKey={key} key={key} stroke="#8884d8" />
      ))}
    </LineChart>
  );
}