/**
 * EXPRESS SERVER SETUP
 * Backend untuk handle form submissions dan serve static files
 */

// Import dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

/**
 * MIDDLEWARE SETUP
 * - cors: Izinkan frontend akses backend dari domain berbeda
 * - express.json(): Parse JSON data dari frontend
 * - express.static(): Serve file static (HTML, CSS, JS)
 */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

/**
 * CONTACT FORM ENDPOINT
 * Handle ketika user submit form di frontend
 */
app.post('/api/contact', (req, res) => {
    const { name, phone, interest } = req.body;
    
    // Log the lead - dalam real application, simpan ke database
    console.log('🚗 NEW LEAD RECEIVED:');
    console.log('📞 Name:', name);
    console.log('📱 Phone:', phone);
    console.log('🎯 Interest:', interest);
    console.log('⏰ Date:', new Date().toISOString());
    console.log('---');
    
    // TODO: Dalam production, bisa:
    // 1. Save ke database (MongoDB, PostgreSQL)
    // 2. Send email notification
    // 3. Send WhatsApp message
    // 4. Integrasi dengan CRM
    
    // Send success response ke frontend
    res.json({ 
        success: true, 
        message: 'Thank you! I will contact you within 24 hours.' 
    });
});

/**
 * HEALTH CHECK ENDPOINT
 * Untuk test apakah server running
 */
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Sales website backend is running!',
        timestamp: new Date().toISOString()
    });
});

/**
 * START SERVER
 * Jalankan server di port yang ditentukan
 */
app.listen(PORT, () => {
    console.log('🚗 Sales Website Backend Started!');
    console.log('📍 Local: http://localhost:' + PORT);
    console.log('⏰ Started at:', new Date().toISOString());
    console.log('---');
    console.log('Endpoints:');
    console.log('  POST /api/contact    - Handle contact form');
    console.log('  GET  /api/health     - Health check');
    console.log('  GET  /               - Serve frontend');
});