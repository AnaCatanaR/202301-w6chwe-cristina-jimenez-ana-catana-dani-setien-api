import { app } from "../startServer.js";
import generalError from "./generalError/generalError.js";

app.use("/", (req, res, next) => {
  res.status(404).json({ error: "Invalid endpoint." });
});

app.use(generalError);
