import morgan from "morgan";
import { app } from "../listeners/startServer.js";

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.status(404).json({ error: "Invalid endpoint." });
});
