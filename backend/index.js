const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const port = 3000;
const cors = require('cors');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("message", (data) => {
    console.log("Received message: ", data);
    socket.broadcast.emit("receive-message", data);
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
