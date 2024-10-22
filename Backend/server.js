const express = require('express');
const cors = require('cors');
const contentstack = require('./contentstack');  // Contentstack API integration
const app = express();
const PORT = 3000;

app.use(cors());  // To allow cross-origin requests

// Route to fetch home page content
app.get('/api/home', async (req, res) => {
  try {
    const homeContent = await contentstack.fetchHomePage();
    res.json(homeContent);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching home content' });
  }
});

// Route to fetch About Us content
app.get('/api/about', async (req, res) => {
  try {
    const aboutContent = await contentstack.fetchAboutPage();
    res.json(aboutContent);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching About Us content' });
  }
});

// Route to fetch Services/Products content
app.get('/api/services', async (req, res) => {
  try {
    const servicesContent = await contentstack.fetchServicesPage();
    res.json(servicesContent);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Services/Products content' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
