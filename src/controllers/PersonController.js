const mongoose = require("mongoose");
const Person = mongoose.model("Person");

module.exports = {
  async show(req, res) {
    const person = await Person.findById(req.params.id);

    return res.json(person);
  },

  async store(req, res) {
    const person = await Person.create(req.body);

    return res.json(person);
  },

  async update(req, res) {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(person);
  },

  async destroy(req, res) {
    await Person.findByIdAndDelete(req.params.id);

    res.send();
  },

  async show_all(req, res) {
    const persons = await Person.find();

    return res.json(persons);
  }
};
