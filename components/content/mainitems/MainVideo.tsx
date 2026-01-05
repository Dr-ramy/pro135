"use client";

import { useRef, useState, useEffect } from "react";
import LessonSidebar from "../groupa/LessonSidebar";
import { ButtonItem, VideoItem } from "@/types/types";
import { videoMap, formLinks } from "../groupa/LessonData";
import GeminiChatModal from "@/components/ai/GeminiChatModal1";
import GeminiChatModal2 from "@/components/ai/GeminiChatModal2";
import GeminiChatModal3 from "@/components/ai/GeminiChatModal3";
import GeminiChatModal4 from "@/components/ai/GeminiChatModal4";
import VideoModalButton from "@/components/layout/ModalIframeButton";

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState<VideoItem>({
    type: "button",
    id: "1vid0",
    text: "الأهداف",
    title: "الأهداف",
    icon: "",
    src: videoMap["1vid0"],
  });

  const [visitedIds, setVisitedIds] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const [buttonHeight, setButtonHeight] = useState(200);

  // ✅ سجل للمراجع
  const aiTriggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleLessonClick = (btn: ButtonItem) => {
    // ✅ التعامل مع أزرار modal بشكل ديناميكي
    if (btn.type === "modal") {
      const ref = aiTriggerRefs.current[btn.id];
      if (ref) {
        ref.click(); // فتح المساعد المناسب
        return;
      }
      console.warn("لم يتم العثور على مرجع للزر:", btn.id);
      return;
    }

    // ✅ الفيديوهات والنماذج
    if (videoMap[btn.id]) {
      setCurrentVideo({ ...btn, title: btn.text, src: videoMap[btn.id] });
    } else if (formLinks[btn.id]) {
      window.open(formLinks[btn.id], "_self");
    }

    setVisitedIds((prev) => new Set(prev).add(btn.id));
  };

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setButtonHeight(containerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [currentVideo]);

  return (
    <div className="relative flex flex-col items-center rtl text-right min-h-screen bg-white overflow-x-hidden">
      <main
        className="p-1 space-y-4 w-full max-w-6xl mx-auto relative"
        ref={containerRef}
      >
        <h6 className="text-sm sm:text-base md:text-lg font-bold text-center mb-1">
          {currentVideo.title}
        </h6>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto bg-black rounded-2xl overflow-hidden shadow-xl">
          <video
            key={currentVideo.src}
            src={currentVideo.src}
            controls
            className="w-full max-h-[calc(100vh-6rem)] object-contain"
          />
        </div>
      </main>

      {/* الشريط الجانبي */}
      <LessonSidebar
        currentVideo={currentVideo}
        visitedIds={visitedIds}
        onSelect={handleLessonClick}
        buttonHeight={buttonHeight}
      />

      {/* ✅ جميع المودالات مربوطة ديناميكياً */}
      <GeminiChatModal
      trigger={<button ref={(el) => { aiTriggerRefs.current["1modal"] = el; }} className="hidden">open</button>}
      />
      <GeminiChatModal2
      trigger={<button ref={(el) => { aiTriggerRefs.current["2modal"] = el; }} className="hidden">open</button>}
      />
      <GeminiChatModal3
      trigger={<button ref={(el) => { aiTriggerRefs.current["3modal"] = el; }} className="hidden">open</button>}
      />
      <GeminiChatModal4
      trigger={<button ref={(el) => { aiTriggerRefs.current["4modal"] = el; }} className="hidden">open</button>}
      />
    <VideoModalButton
    iframeUrl="https://www.youtube.com/watch?v=TAG_uyvT2pI"
    title="فيديو تعليمي"
    trigger={<button ref={(el) => { aiTriggerRefs.current["5modal"] = el; }} className="hidden">open</button>}
    />
    </div>
  );
}
