const { Pool } = require('pg');
const fs = require('fs');
const csv = require('csv-parser');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'metricsdb',
  password: 'Avnish123',
  port: 5432,
});

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', async (row) => {
    const { name, value, timestamp } = row;
    await pool.query(
      'INSERT INTO metrics (name, value, timestamp) VALUES ($1, $2, $3)',
      [name, value, timestamp]
    );
  })
  .on('end', () => {
    console.log('CSV data ingested');
    pool.end();
  });