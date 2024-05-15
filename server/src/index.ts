import express from "express";
import Groq from "groq-sdk";
import cors from "cors";
import "dotenv/config";
const app = express();
const PORT = 8080;

app.use(cors()); // Enable CORS for all routes and origins
app.use(express.json()); // Middleware to parse JSON bodies

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function getGroqChatCompletion(existingText: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an assistant designed to autocomplete the next part of a users sentance. Only respond with the autocompleted text. Keep your response very short. Do not include the prompt.",
      },
      {
        role: "user",
        content: existingText,
      },
    ],
    model: "llama3-8b-8192",
  });
}

app.post("/", async (req, res) => {
  try {
    const body = req.body;
    const existingText = body.text;
    // const completion = await getGroqChatCompletion(existingText);
    res.json({ text: "and yea..." });
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
