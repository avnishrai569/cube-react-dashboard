cube(`Metrics`, {
  sql: `SELECT * FROM public.metrics`,

  measures: {
    count: {
      type: 'count',
    },
    totalValue: {
      sql: 'value',
      type: 'sum',
    },
    avgValue: {
      sql: 'value',
      type: 'avg',
    },
  },

  dimensions: {
    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },
    name: {
      sql: 'name',
      type: 'string',
    },
    timestamp: {
      sql: 'timestamp',
      type: 'time',
    },
  },
});