import express from "express";

import cors from "cors";
import { getOpenAIChatCompletion } from "./models/openai";

const app = express();
const PORT = 8080;

app.use(cors()); // Enable CORS for all routes and origins
app.use(express.json()); // Middleware to parse JSON bodies

app.post("/", async (req, res) => {
  try {
    const body = req.body;
    const existingText = body.text;
    const completion = await getOpenAIChatCompletion(existingText);
    res.json({ text: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
