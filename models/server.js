const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      users: "/api/users",
      parts: "/api/parts",
    };

    this.conectarDB();

    this.middlewares();

    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.users, require("../routes/users"));
    this.app.use(this.paths.parts, require("../routes/parts"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Martin's port running on port:", this.port);
    });
  }
}

module.exports = Server;
