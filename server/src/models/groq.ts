import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function getGroqChatCompletion(existingText: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          // "You are an assistant designed to autocomplete the next part of a users sentance. Only respond with the autocompleted text. Keep your response very short. Do not include the prompt.",
          "You are an assistant designed to autocomplete the next part of a users sentance using the existing text. Only respond with the autocompleted text. Keep your response very short. Do not include the prompt.",
      },
      {
        role: "user",
        content: existingText,
      },
    ],
    model: "llama3-8b-8192",
  });
}
