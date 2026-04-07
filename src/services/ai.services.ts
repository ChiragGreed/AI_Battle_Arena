import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { CohereEmbeddings } from "@langchain/cohere";
import config from '../config/ai.config.js';

export const GeminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-flash-latest",
  apiKey: config.process.env.GOOGLE_API_KEY
});

export const MistralModel = new MistralAIEmbeddings({
  model: "mistral-small",
  apiKey: config.process.env.MISTRAL_API_KEY
})

const CohereModel = new CohereEmbeddings({
  model: "embed-english-v3.0",
  apiKey: config.process.env.COHERE_API_KEY
});