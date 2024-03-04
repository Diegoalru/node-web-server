import express from "express";
import { join } from "path";

export default function startServer(options) {
  const { port, publicPath = "public" } = options;
  const app = express();

  app.use(express.static(publicPath));

  app.get("/", (req, res) => {
    const indexPath = join(__dirname, `../../../${publicPath}`, "index.html");

    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
