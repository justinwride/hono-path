import { Hono } from 'hono';
import example from './routes/example.js';

const app = new Hono();

app.route('/example', example);

export default app;