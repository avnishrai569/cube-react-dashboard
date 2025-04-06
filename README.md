
# Cube.js React Dashboard Assignment

## Overview
This project demonstrates a data pipeline with the following technologies:
- PostgreSQL for data storage
- Cube.js for data modeling and analytics API
- React with Recharts for data visualization

## Folder Structure

```
cube-react-dashboard/
├── backend/                # SQL schema and CSV ingestion
│   ├── setup.sql
│   └── seed_data.sql
├── cubejs/                 # Cube.js backend setup
│   ├── schema/
│   │   └── SampleData.js
│   ├── package.json
│   └── .env
├── frontend/               # React app with charts
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
└── README.md
```

## How to Run

### 1. PostgreSQL Setup
- Run the SQL scripts in `backend/` to create the table and seed data.

### 2. Cube.js Setup
```bash
cd cubejs
npm install
npm run dev
```

### 3. React Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 4. Access the App
- React app runs on `http://localhost:3000`
- Cube.js backend on `http://localhost:4000`

## Features
- Line Chart: Trend over time
- Bar Chart: Distribution by name
- Pie Chart: Percentage distribution by name
- Routing and navbar for switching charts

## License
MIT License
