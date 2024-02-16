import express from "express";
import * as dotenv from "dotenv";
import OpenAi from "openai";

dotenv.config();

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

const router = express.Router();

export default router;
