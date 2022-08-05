import express, { application } from 'express';

import usersRoutes from './routes/users.js';

// Create the api on the exp port: http://localhost:5000

const app = express();
const PORT = '5000';
 
app.use(express.json())

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.')); 

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));