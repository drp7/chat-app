const express = require("express");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/user", userRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || "5000";
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
