import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env.OPENAI_ORG_ID,
  project: process.env.OPENAI_PROJECT_ID,
});

export async function getOpenAIChatCompletion(existingText: string) {
  return await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          //  "You are an assistant designed to autocomplete the next part of a users sentance. Only respond with the autocompleted text. Keep your response very short. Do not include the prompt.",
          "You are an assistant designed to autocomplete the next part of a users sentance using the existing text. Only respond with the autocompleted text. Keep your response extremely short. Do not include the prompt.",
      },
      { role: "user", content: existingText },
    ],
  });
}
