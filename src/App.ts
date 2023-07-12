import express from "express";

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
  }
}

export default new App().app;
