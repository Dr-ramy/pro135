'use client';

import React, { useState, useEffect, useRef, FormEvent, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { FaPaperPlane, FaArrowLeft, FaPlus } from 'react-icons/fa';

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

type Message = {
  _id: string;
  username: string;
  content: string;
  createdAt: string;
};

const PAGE_SIZE = 10;
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ChatPage() {
  const [session, setSession] = useState<{ user: { name: string } } | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getSession().then(sessionData => {
      setSession(sessionData);
    });
  }, []);

  const { data, size, setSize, isValidating, mutate } = useSWRInfinite<Message[]>(
    (index: number) => `/api/chat/messages?page=${index + 1}&limit=${PAGE_SIZE}`,
    fetcher
  );

  const messages: Message[] = useMemo(() => {
    return data ? ([] as Message[]).concat(...data) : [];
  }, [data]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !session?.user.name) return;

    const messageData = {
      username: session.user.name,
      content: newMessage.trim(),
    };

    await fetch('/api/chat/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    });

    setNewMessage('');
    mutate();
  };

  return (
    <div className="max-w-3xl mx-auto p-4 min-h-screen flex flex-col" dir="rtl">
      
      {/* العنوان وزر الرجوع */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">التوجيه</h1>
        <Link href="/content" className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded whitespace-nowrap">
          <FaArrowLeft />
          <span>العودة للمحتوى</span>
        </Link>
      </div>

      {/* ✅ الصورة + النص في Grid متجاوب */}
      <Card className="mb-4 shadow-sm overflow-hidden">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            
            {/* ✅ الصورة */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer hover:opacity-90 transition w-full">
                  <AspectRatio ratio={16 / 9}>
          <Image
            src="/images/chat-room4.jpg"
            alt="صورة غرفة الدردشة"
            fill
            className="object-cover rounded-lg"
            priority
          />
                  </AspectRatio>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                <DialogTitle>صورة مكبرة</DialogTitle>
              <Image
                src="/images/chat-room4.jpg"
                alt="صورة مكبرة"
                fill
                className="object-contain rounded-lg"
              />
              </DialogContent>
            </Dialog>

            {/* ✅ النص مع Scroll مضبوط */}
            <div className="text-gray-700 leading-relaxed text-right border rounded-md p-3 bg-muted max-h-48 overflow-y-auto">
  <p>ما أقسام الموارد المائية في العالم العربي؟</p>
  <p>ما هي المياه الساقطة والثلوج الذائبة؟</p>
  <p>ما أهم الأنهار والبحيرات في العالم العربي؟</p>
  <p>ما المقصود بالمياه الجوفية؟ وما أهميتها؟</p>
  <p>كيف نحافظ على الموارد المائية في العالم العربي؟</p>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* ✅ الرسائل */}
      <div className="flex-1 overflow-y-auto border rounded p-4 mb-4 bg-white shadow">
        {messages.length === 0 && <p className="text-center text-gray-500">لا توجد رسائل بعد.</p>}

        {messages.map((msg: Message) => (
          <div key={msg._id} className="mb-3 border-b pb-2">
            <span className="font-semibold">{msg.username}: </span>
            <span>{msg.content}</span>
            <div className="text-xs text-gray-400">{new Date(msg.createdAt).toLocaleString()}</div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* ✅ إدخال الرسالة */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="اكتب إجابتك ..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border rounded px-3 py-2 text-right"
          disabled={!session?.user.name}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!newMessage.trim() || !session?.user.name}
        >
          <FaPaperPlane />
          إرسال
        </button>
      </form>

      {/* حالة التحميل */}
      {isValidating && <p className="text-center text-gray-500 mt-2">جارِ التحميل...</p>}

      {/* تحميل المزيد */}
      <div className="text-center mt-4">
        <button
          onClick={() => setSize(size + 1)}
          disabled={isValidating}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mx-auto"
        >
          <FaPlus />
          تحميل المزيد
        </button>
      </div>
    </div>
  );
}
