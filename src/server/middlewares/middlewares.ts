import { app } from "../startServer.js";
import generalError from "./errorMiddlewares.js";

app.use("/", (req, res, next) => {
  res.status(404).json({ error: "Invalid endpoint." });
});

app.use(generalError);
