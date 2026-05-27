require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/database');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173'}));
app.use(express.json());

const PORT = process.env.PORT || 1337;

app.get('/api/health', (req, res) => res.json({ ok: true }));

db.pool.getConnection()
    .then((conn) => {
        console.log('Connected to DB');
        conn.release();
        const server = app.listen(PORT, () => {
            const addr = server.address();
            const actualPort = typeof addr === 'string' ? addr : addr.port;
            const bindAddress = typeof addr === 'string' ? addr : (addr.address || '0.0.0.0');
            const hostForLog = (bindAddress === '0.0.0.0' || bindAddress === '::') ? (process.env.HOST || 'localhost') : bindAddress;
            const protocol = process.env.PROTOCOL || 'http';
            console.log(`Server listening at ${protocol}://${hostForLog}:${actualPort}`);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to DB', err);
        process.exit(1);
    });

