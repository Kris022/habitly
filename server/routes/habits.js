const habits = [
  { id: 1, name: "gym", date: "13-10-23" },
  { id: 2, name: "read", date: "13-10-23" },
  { id: 3, name: "watch", date: "13-10-23" },
];

const Joi = require("joi");
const express = require("express");
const router = express.Router();

// GET all habits
router.get("/", (req, res) => {
  res.status(200).send(habits);
});

// GET single habit
router.get("/:id", (req, res) => {
  const habit = habits.find((h) => h.id === parseInt(req.params.id));
  if (!habit) return res.status(400).send("Invalid ID provided.");

  res.status(200).send(habit);
});

// POST habit
router.post("/", (req, res) => {
  // validate new habit name
  const { error } = validateHabit(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // NEEDS TODAYS DATE
  const newHabit = { id: habits.length + 1, name: req.body.name };
  habits.push(newHabit);

  res.status(200).send(newHabit);
});

// PUT habit
router.put("/:id", (req, res) => {
  // Validate the id
  const habit = habits.find((h) => h.id === parseInt(req.params.id));
  if (!habit) return res.status(400).send("Invalid ID.");

  // Validate update data
  const { error } = validateHabit(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //   Upodate
  habit.name = req.body.name;
  return res.status(200).send(habit);
});

// DELTE habit
router.delete("/:id", (req, res) => {
  const habit = habits.find((h) => h.id === parseInt(req.params.id));
  if (!habit) return res.status(200).send("Invalid ID provided.");

  const index = habits.indexOf(habit);
  habits.splice(index, 1);

  return habit;
});

module.exports = router;

function validateHabit(habit) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(habit);
}

function validateID(_id) {
  const habit = habits.find((h) => h.id === parseInt(_id));
  if (!habit) return new Error("Invalid ID"); // Return error object in this instance
  return habit;
}
