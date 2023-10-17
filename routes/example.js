import { Hono } from 'hono';

const app = new Hono();

app.get('/assignments/:assignmentId?', async c => {
    console.log('ID', c.req.param('assignmentId'));
    return c.json({
        assignmentId: c.req.param('assignmentId')
    });
});

app.post('/assignments/:assignmentId?', async c => {
    console.log('ID', c.req.param('assignmentId'));
    return c.json({
        assignmentId: c.req.param('assignmentId')
    });
});

app.onError(async (err, c) => {
    console.error('Server error:', err);
    return c.text(`An error occurred: ${err.name}`, 500);
});

export default app;