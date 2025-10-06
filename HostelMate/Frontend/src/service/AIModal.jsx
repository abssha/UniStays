import { GoogleGenAI } from "@google/genai";
import { toast } from "sonner";

// helper: download binary/image in browser
export function saveFile(fileName, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function generateGeminiContent(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY,
  });

  const config = {
    responseModalities: ["TEXT"],
  };

  const model = "gemini-2.5-flash";

  const contents = [
    {
      role: "user",
      parts: [{ text: `${prompt}` }],
    },
  ];

  let attempt = 0;
  const maxRetries = 3;

  while (attempt < maxRetries) {
    try {
      const response = await ai.models.generateContent({
        model,
        config,
        contents,
      });

      const textResponse =
        response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      // Try parsing JSON safely
      try {
        const jsonData = JSON.parse(textResponse);
        return { success: true, data: jsonData };
      } catch {
        // If invalid JSON, return raw text
        console.warn("Invalid JSON from AI:", textResponse);
        return { success: false, error: "Invalid JSON", raw: textResponse };
      }
    } catch (error) {
      const msg = error.message || "";

      // Retry for 503 (model overload) or 429 (rate limit)
      if (msg.includes("503") || msg.includes("overloaded") || msg.includes("429")) {
        attempt++;
        const waitTime = attempt * 5000;
        console.warn(`AI request failed (${msg}). Retrying in ${waitTime / 1000}s...`);
        await new Promise((r) => setTimeout(r, waitTime));
        continue;
      }

      // Other errors → return
      return { success: false, error: msg };
    }
  }
  toast('Failed to load your data')
  return { success: false, error: "Max retries reached" };
}

// Standard AI prompt
export const AI_prompt =
  "Give me a JSON array of 20 hostels in {location} with keys: name, image_url, location, price_per_person, geo_coordinates {latitude, longitude}, rating {score, out_of 5}, description. Respond ONLY in JSON format without (``` json ```).";
