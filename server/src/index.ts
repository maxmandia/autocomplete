import express from "express";

import cors from "cors";
import { getOpenAIChatCompletion } from "./models/openai";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { text, url } = req.body;
    const completion = await getOpenAIChatCompletion(text, url);
    res.json({ text: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "CORS enabled!" });
});

app.listen(port, "0.0.0.0", function () {
  console.log(`Server is running!`);
});
