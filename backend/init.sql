CREATE TABLE IF NOT EXISTS metrics (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  value NUMERIC,
  timestamp TIMESTAMP
);

INSERT INTO metrics (name, value, timestamp) VALUES
('Alpha', 10, NOW() - INTERVAL '3 days'),
('Beta', 20, NOW() - INTERVAL '2 days'),
('Gamma', 30, NOW() - INTERVAL '1 day'),
('Alpha', 40, NOW()),
('Beta', 50, NOW());