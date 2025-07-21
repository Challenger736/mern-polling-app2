// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import pollRoutes from "./routes/pollRoutes.js";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";




// dotenv.config();
// const app = express();

// // ✅ Parse JSON requests
// app.use(express.json());

// // ✅ Enable CORS for frontend
// app.use(cors());
// app.use("/api/auth", authRoutes);

// // ✅ Your routes
// app.use("/api/polls", pollRoutes);

// const PORT = process.env.PORT || 5000;
// connectDB();

// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import pollRoutes from "./routes/pollRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
