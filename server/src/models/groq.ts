import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function getGroqChatCompletion(existingText: string, url: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an chrome extension assistant designed to autocomplete the next part of a users sentance using the existing text on any webpage. The current webpage the user is on ${url} - please use this as context for the autocompleted text. Only respond with the autocompleted text. Keep your response extremely short. Do not include the prompt.`,
      },
      {
        role: "user",
        content: existingText,
      },
    ],
    model: "llama3-8b-8192",
  });
}
