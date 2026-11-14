
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Server health check
app.get('/api/health', (req, res) => {
  res.json({
    app: 'STOCK PULSE',
    status: 'Backend Connected',
    message: 'Server is running successfully'
  });
});

// Market data provider status
app.get('/api/market-status', (req, res) => {
  res.json({
    provider: process.env.DATA_PROVIDER || 'Not configured',
    liveData: false,
    message: 'Authorized market data provider is not connected yet'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`STOCK PULSE Backend running on port ${PORT}`);
});
