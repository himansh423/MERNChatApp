const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const authRoutes = require('./routes/authRoutes');
const chatroomRoutes = require('./routes/chatroomRoutes');

const app = express();
const port = process.env.PORT || 5000;

// CORS Setup
app.use(cors({
  origin: "https://mystify-indol.vercel.app", // Replace with your frontend domain
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/chatroom", chatroomRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/create-room", (req, res) => {
  const roomId = uuidv4();
  res.json({ roomId });
});

// Initialize HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "https://mystify-indol.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Socket.IO middleware for authentication
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication error: No token provided'));
  }

  jwt.verify(token, process.env.CHATROOM_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(new Error('Authentication error: Invalid token'));
    }
    socket.userId = decoded.id;
    next();
  });
});

// Socket.IO event handling
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

// Start the server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
