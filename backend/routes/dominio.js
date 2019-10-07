import express from "express";

//import { Auth } from "../middleware";
import { Dominio } from "../api";
//import { handleError } from "../utils";

const app = express.Router();
const path = require("path");

app.get("/", async (req, res) => {
  try {
    const data = await Dominio.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'An error ocurred',
      error: error.toString()
    });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const data = await Dominio.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'An error ocurred',
      error: error.toString()
    });
  }
});

app.post("/", async (req, res) => {
  try {
    let q = req.body;
    const data = await Dominio.create(q);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'An error ocurred',
      error: error.toString()
    });
  }
});

app.put("/", async (req, res) => {
  try {
    let q = req.body;
    const data = await Dominio.update(q);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'An error ocurred',
      error: error.toString()
    });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const data = await Dominio.delete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'An error ocurred',
      error: error.toString()
    });
  }
});

export default app;
