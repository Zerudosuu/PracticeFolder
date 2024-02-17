import express from "express";
import * as dotenv from "dotenv";
import OpenAi from "openai";

dotenv.config();

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Welcome to OpenAi");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (e) {
    console.error(e);
  }
});

export default router;
