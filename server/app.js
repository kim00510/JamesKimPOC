
/**
 * Express application for the Food POC.
 * Provides the GET /foods endpoint.
 */

const express = require("express");
const foodStore = require("./data");

const app = express();

// Enable JSON request body parsing.
app.use(express.json());
app.use(express.static("public"));

// Return all food items.
app.get("/foods", (req, res) => {
  console.log("GET /foods request received.");

  const foods = foodStore.getAll();

  console.log(`Returning ${foods.length} food items.`);

  res.status(200).json(foods);
});

// Handle undefined routes.
app.use((req, res) => {
  console.log(`404 Not Found: ${req.method} ${req.path}`);

  res.status(404).json({
    error: "Route not found"
  });
});

module.exports = app;
