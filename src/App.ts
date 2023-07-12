import express from "express";
import cors from "cors";
import firms from "./routes/firms";

class App {
  public app;

  constructor() {
    this.app = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (_, res) => {
      res.json({ message: "It's alive!" });
    });
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use("/", router);
    this.app.use("/firms", firms);
  }
}

export default new App().app;
