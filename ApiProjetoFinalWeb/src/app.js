import express from 'express';
import cors from 'cors';
import routes from './Routes';


const app = express();
app.use('/api/uploads', express.static('uploads'))
app.use(express.json());

app.use(cors());

app.use('/api', routes);

export default app;