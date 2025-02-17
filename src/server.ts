import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import postRoutes from './routes/postRoutes';
import { Message } from './models/message';

const app = express();
const port = 3000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  }
});

app.use(express.json());
app.use('/api', postRoutes);

io.on('connection', (socket) => {
    socket.on('message', (message: string) => {
        const mes: Message = { socketId: socket.id, body: message };
        io.emit('message', mes);
    });
});

httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});