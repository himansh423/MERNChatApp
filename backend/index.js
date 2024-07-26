const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');
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

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});


app.get("/create-room", (req, res) => {
  const roomId = uuidv4(); 
  res.json({ roomId });
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("message", (data) => {
    console.log("Received message: ", data);
    socket.broadcast.to(data.roomId).emit("receive-message", data.message);
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
