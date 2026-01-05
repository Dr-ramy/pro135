"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGeminiChat, Message } from "@/hooks/useGeminiChat";

type GeminiChatModalProps = {
  trigger: React.ReactNode;
};

export default function GeminiChatModal({ trigger }: GeminiChatModalProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { sendMessage } = useGeminiChat();

  const base =
      "أنت مساعد ذكي. أجب باختصار وبدقة عن الأسئلة المتعلقة بالكفايات المهنية الرقمية لدى معلمي المرحلة الإعدادية  ومنصة edcafe التعليمية. افترض أن المستخدم طالب، وشرح له بشكل واضح ومبسط.";
  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");

    const newUserMessage: Message = { sender: "user", text: trimmed };
    const systemMessage: Message = { sender: "system", text: base };

    const newMessages = [systemMessage, ...messages, newUserMessage];
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    try {
      const reply = await sendMessage(newMessages);
      const aiMessage: Message = {
        sender: "ai",
        text: reply ?? "❌ تعذر الحصول على رد من المساعد.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setError("حدث خطأ أثناء التواصل مع المساعد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="w-[90vw] max-w-2xl h-[85vh] flex flex-col" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right"> الكفايات المهنية الرقمية </DialogTitle>
        </DialogHeader>

        {/* ✅ النص الثابت مع Scroll */}
        <div className="text-right text-gray-700 space-y-2 leading-relaxed mb-4 border rounded-md p-3 bg-muted max-h-40 overflow-y-auto">
          <p>منصة Edcafe وخصائصها</p>
          <p>التسجيل على منصة Edcafe</p>
          <p>واجهة المستخدم</p>
          <p>إعداد الدورات الدراسية</p>
          <p>التفاعل مع المحتوى</p>
          <p>إدارة الاختبارات والواجبات</p>
          <p>أدوات التحليل والتقارير</p>
        </div>

        {/* ✅ منطقة عرض المحادثات */}
        <div className="flex-1 border p-4 rounded-lg space-y-2 text-right bg-muted h-64 overflow-y-auto">
          {messages.length > 0 ? (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[80%] whitespace-pre-line ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 text-blue-800"
                    : msg.sender === "system"
                    ? "mx-auto text-green-700 bg-green-100"
                    : "mr-auto bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))
          ) : (
            !loading && <p className="text-gray-500">لا توجد محادثات حالياً.</p>
          )}
          {loading && <p className="text-gray-500">🔄 جاري التحميل...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {/* الإدخال */}
        <div className="flex mt-4 space-x-2 rtl:space-x-reverse">
          <Input
            className="flex-1"
            placeholder="اكتب سؤالك هنا..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <Button onClick={handleSend} disabled={loading}>
            {loading ? "جاري..." : "إرسال"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
