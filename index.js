import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./db.js";
import dotenv from "dotenv";
import ProjectRoutes from "./ProjectRoutes.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/projects", ProjectRoutes);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server running on port ${process.env.PORT}`);
});
