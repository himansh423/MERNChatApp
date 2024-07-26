const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const dbURI = 'mongodb+srv://himansh423:7890himan7890@cluster0.tmqtlfx.mongodb.net/chatapp?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/create-room", (req, res) => {
  const roomId = uuidv4();
  res.json({ roomId });
});

// Socket.io events
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
