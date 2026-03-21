import express, { Request, Response } from "express";
import { testConnection } from './config/dbTodo';

testConnection();
const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  // const isToken = false
  res.status(201).json({
    msg: "Hello from San Tola",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// define array object
