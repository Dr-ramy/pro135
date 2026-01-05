"use client";

import { useState } from "react";
import axios from "axios";

// نوع الرسائل
export type Message = {
  sender: "user" | "ai" | "system";
  text: string;
};

// تحويل الرسائل إلى تنسيق Gemini API
const convertMessagesToGeminiFormat = (messages: Message[]) =>
  messages.map((msg) => ({
    role: msg.sender === "user" ? "user" : "model",
    parts: [{ text: msg.text }],
  }));

// Hook
export function useGeminiChat(apiKey?: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async (
    conversation: Message[]
  ): Promise<string | null> => {
    const finalKey = apiKey || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!finalKey) {
      setError("❌ لم يتم العثور على مفتاح API");
      return null;
    }

    setLoading(true);
    setError("");

    try {
      const contents = convertMessagesToGeminiFormat(conversation);

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${finalKey}`,
        { contents },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      return text ?? null;
    } catch (err: any) {
      console.error("Gemini API Error:", err.response?.data || err.message);
      setError("⚠️ حدث خطأ أثناء الاتصال بـ Gemini API.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
}
