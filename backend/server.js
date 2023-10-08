import app from "./app.js";
import colors from "colors";
import connectDB from "./utils/dbConn.js";
import studentRoutes from "./routes/studentRoutes.js";
import { PORT,DEV_MODE } from "./config.js";

// Connection String
connectDB();

app.use("/api/student", studentRoutes);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server ${DEV_MODE} running on port ${PORT}`.bgCyan.white);
});