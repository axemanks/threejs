import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();
const port = process.env.PORT || 3008; // default port to 3008 if not specified in dotenv

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Add each route to the app
// /api/v1/dalle 
app.use('/api/v1/dalle', dalleRoutes);

// "/" res.status(200).send('Hello from Dall.E!');
app.get('/', (req, res) => {
    res.status(200).send('Hello from Dall.E!');
});

app.listen(port, () => console.log(`Server is running on port ${port}!`));