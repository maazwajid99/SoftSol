import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const alreadyExists = await Subscriber.findOne({ email });
    if (alreadyExists) {
      return res.status(400).json({ message: "Already subscribed!" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Successfully subscribed!" });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
