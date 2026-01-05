import type { ButtonItem } from "@/types/types"

// بيانات الدروس
export const lessons: {
lesson_one: ButtonItem[];lesson_two: ButtonItem[];lesson_three: ButtonItem[];lesson_four: ButtonItem[];lesson_five:ButtonItem[];
lesson_six:ButtonItem[];lesson_seven:ButtonItem[];lesson_eight:ButtonItem[];lesson_nine:ButtonItem[];lesson_ten:ButtonItem[];
lesson_eleven:ButtonItem[];lesson_twelve:ButtonItem[];lesson_thirteen:ButtonItem[];lesson_fourteen:ButtonItem[];lesson_fifteen:ButtonItem[];
} = {
  lesson_one: [
    { type: "button", id: "1vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "button", id: "1act1", text: " تمهيد", icon: "activity" },
    { type: "button", id: "1act2", text: " مقدمة ", icon: "video" },
    { type: "button", id: "1act3", text: " ورقة عمل ", icon: "activity" },
    { type: "button", id: "1act4", text: " مناقشة", icon: "activity" },
    { type: "button", id: "1vid1", text: " مفهوم التخطيط ", icon: "video" },
    { type: "button", id: "1vid2", text: " عناصر التخطيط   ", icon: "video" },
    { type: "button", id: "1vid3", text: "أهمية التخطيط   ", icon: "video" },
    { type: "button", id: "1vid4", text: " فوائد وأنواع التخطيط", icon: "video" },
    { type: "button", id: "1vid5", text: " الخطة التدريسية السنوية   ", icon: "video" },
    { type: "button", id: "1vid6", text: " الخطة التدريسية اليومية", icon: "video" },
    { type: "button", id: "1vid7", text: " أخطاء في تخطيط الدروس  ", icon: "video" },
    { type: "button", id: "1vid8", text: "   أشكال خطة الدرس اليومي  ", icon: "video" },
    { type: "button", id: "1act5", text: "نشاط ", icon: "activity" },
    { type: "button", id: "1act6", text: "التقويم ", icon: "activity" },
    { type: "button", id: "1act7", text: " النشاط الإثرائي", icon: "activity" },
  ],
  lesson_two: [],
  lesson_three: [],lesson_four: [], lesson_five: [], lesson_six: [], lesson_seven: [],lesson_eight: [],lesson_nine: [],lesson_ten: [],lesson_eleven: [],lesson_twelve: [],lesson_thirteen: [],lesson_fourteen: [],lesson_fifteen: [],
}


// روابط الفيديوهات
export const videoMap: Record<string, string> = {
  "1vid0": "/videos/vid1/vid0.mp4",
  "1vid1": "/videos/vid1/vid1.mp4",
  "1vid2": "/videos/vid1/vid2.mp4",
  "1vid3": "/videos/vid1/vid3.mp4",
  "1vid4": "/videos/vid1/vid4.mp4",
  "1vid5": "/videos/vid1/vid5.mp4",
  "1vid6": "/videos/vid1/vid6.mp4",
  "1vid7": "/videos/vid1/vid7.mp4",
  "1vid8": "/videos/vid1/vid8.mp4",
  /*******************************************************************/
}

// روابط النماذج
export const formLinks: Record<string, string> = {
  "1act1": "  https://forms.gle/Z3rLnAiD8A4FJsni7  ",
  "1act2": "  https://www.youtube.com/watch?v=TAG_uyvT2pI  ",
  "1act3": "  https://forms.gle/vypmdSxb81a1S6XQ8  ",
  "1act4": "  /chat   ",
  "1act5": "  https://forms.gle/zM2igctNt94T3tru5  ",
  "1act6": "  https://forms.gle/8D451Lvk5Hi76VuP7  ",
  "1act7": "  https://forms.gle/CH4nKxwvDRAs2UP76  ",

}