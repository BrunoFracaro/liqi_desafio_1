import { Router } from "express";

const routes = Router();

routes.post("/convert", (req, res) => {
  const {value, from, to} = req.body;
  
  res.statusCode = 200
  res.end()
});

export default routes;