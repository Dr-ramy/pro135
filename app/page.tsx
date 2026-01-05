'use client'

import ContentSection from "@/components/mainpage/ContentSection";
import CarouselSlider from "@/components/mainpage/CarouselSlider";
import ScrollToggleButton from "@/components/mainpage/ScrollToggleButton";

import Link from "next/link";
import { FaSignInAlt, FaFacebookF, FaWhatsapp, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-1">
<p
  id="adress"
  className="custom-font text-xl sm:text-2xl md:text-3xl font-bold break-words"
  dir="rtl"
  lang="ar"
>
استخدام استراتيجيات التعلم التشاركي الإلكتروني في تنمية مهارات التدريس الإبداعي لمعلمي علم النفس بالعراق وأثره في تحسين التواصل المجتمعي والتدفق النفسي  لدى طلابهم 

</p>



          <ScrollToggleButton />

          <div className="w-full flex justify-between items-center mt-4">
            {/* Left-side: Social Buttons */}
            <div className="flex space-x-2">
              {/* Facebook */}
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 w-10 h-10"
              >
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </Button>

              {/* WhatsApp */}
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-green-600 text-green-600 hover:bg-green-50 w-10 h-10"
              >
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Right-side: Session-dependent Buttons */}
            <div className="flex items-center gap-2">
              {!session ? (
                // إذا لم يكن مسجل دخول: زر تسجيل الدخول
                <Button
                  asChild
                  variant="outline"
                  className="text-green-600 border-green-600 hover:bg-green-50 px-6 py-2 text-sm sm:text-base"
                >
                  <Link href="/login" className="flex items-center gap-2">
                    <FaSignInAlt className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>تسجيل الدخول</span>
                  </Link>
                </Button>
              ) : (
                <>
                  {/* زر لوحة المشرف أو الملف الشخصي */}
                  <Button
                    asChild
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-2 text-sm sm:text-base"
                  >
                    <Link href={session.user.groupid === 10 ? "/admin" : "/content"}>
                      <div className="flex items-center gap-2">
                        <FaUserShield className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>{session.user.groupid === 10 ? "لوحة المشرف" : "الملف الشخصي"}</span>
                      </div>
                    </Link>
                  </Button>

                  {/* زر تسجيل الخروج */}
                  <Button
                    onClick={() => signOut()}
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50 px-4 py-2 text-sm sm:text-base"
                  >
                    <FaSignOutAlt className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />
                    <span>خروج</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="mt-1">
          <CarouselSlider />
          <ContentSection />
        </div>
      </div>
    </>
  );
}
