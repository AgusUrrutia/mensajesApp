import app from './app';
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';
import {connectDB} from './db';

import sockets from './sockets.js'
import {PORT} from './config';

connectDB();


const server = http.createServer(app);
const hhtpServer = server.listen(PORT);
const io = new WebsocketServer(server)


console.log("server is runnign in puerto ",  PORT);

sockets(io);