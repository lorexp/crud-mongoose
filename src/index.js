const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
requireDir("./models");

const Person = mongoose.model("Person");

const PersonController = require("./controllers/PersonController");

app.use(express.json());

app.post("/person", PersonController.store);
app.get("/people", PersonController.show_all);
app.get("/person/:id", PersonController.show);
app.put("/person/:id", PersonController.update);
app.delete("/person/:id", PersonController.destroy);

app.listen(3000, "0.0.0.0", () => console.log("Listening on 3000"));
