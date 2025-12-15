const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// Fake databases (for now)
let touristIdCounter = 1;
const tourists = [];
const alerts = [];

// --------------------
// REGISTER TOURIST (Digital ID + Blockchain simulation)
// --------------------
app.post('/api/tourists', (req, res) => {
  const { name, email, phone, aadhar } = req.body;

  if (!name || !email || !phone || !aadhar) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const tourist = {
    id: touristIdCounter++,
    name,
    email,
    phone,
    aadhar,
    txHash: '0x' + crypto.randomBytes(16).toString('hex'),
    createdAt: new Date(),
  };

  tourists.push(tourist);
  res.json(tourist);
});

// --------------------
// GET ALL TOURISTS
// --------------------
app.get('/api/tourists', (req, res) => {
  res.json(tourists);
});

// --------------------
// LOCATION UPDATE + AI CHECK
// --------------------
app.post('/api/locations', (req, res) => {
  const { touristId, lat, lng } = req.body;
  const tourist = tourists.find(t => t.id == touristId);

  if (!tourist) {
    return res.status(404).json({ error: 'Tourist not found' });
  }

  tourist.lat = lat;
  tourist.lng = lng;

  // Call Python AI script
  const py = spawn('python', ['anomaly_detector.py', lat, lng]);

  let result = '';
  py.stdout.on('data', data => result += data.toString());

  py.on('close', () => {
    if (result.trim() === 'anomaly') {
      const alert = {
        touristId,
        lat,
        lng,
        type: 'AI Anomaly Detected',
        time: new Date()
      };
      alerts.push(alert);
      return res.json({ status: 'ALERT', alert });
    }
    res.json({ status: 'OK' });
  });
});

// --------------------
// GET ALERTS
// --------------------
app.get('/api/alerts', (req, res) => {
  res.json(alerts);
});

// --------------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
