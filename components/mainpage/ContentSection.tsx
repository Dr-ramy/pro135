'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContentSection() {
  const [isExpandedIntro, setIsExpandedIntro] = useState(false);
  const [isExpandedGoals, setIsExpandedGoals] = useState(false);



  return (
    <div dir="rtl" className="container mx-auto px-4 py-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 4: Authors */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">المؤلفون</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
            <p>
            <strong> اعداد:</strong>
            <br />-   همام حسن علي
            <br />
            <br /> <strong> إشراف:</strong>
            <br />- أ.د/ أماني على السيد رجب
            <br />- أستاذ المناهج وطرق تدريس الدراسات الاجتماعية ورئيس القسم
            <br />- كلية التربية جامعة المنصورة           
            <br />
            <br /> <strong> إشراف:</strong>
            <br />- أ.د/ عاصم السيد إسماعيل
            <br />- أستاذ المناهج وطرق تدريس الدراسات الاجتماعية المتفرغ
            <br />- كلية التربية جامعة المنصورة
            </p>

        </div>
      </CardContent>
    </Card>

    {/* Card 1: Introduction */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">مقدمة</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
          <p>
            يعتبر العالم اليوم عصر متغير بكل المقاييس عن العصور الماضية، فهذا العصر الذي نعيشه هو عصر المعلوماتية والتطور التكنولوجي والثورة التكنولوجية، والثورة الثقافية الهائلة، مما جعل لزامًا علينا أن نواكب هذا التطور ونسايره ونتعايش معه ونترجم للآخرين إبداعنا ونبرز لهم قدراتنا على الابتكار، 

            {!isExpandedIntro && <span className="dot"> ...</span>}
            {isExpandedIntro && (
              <span className="moreText">
                حيث أن القوة الحقيقية لمن يمتلك المعلومات ويستطيع إستخدامها، وهذا لا يعني مجرد معرفة مصادر الحصول على المعلومات فحسب، بل يمتد إلى كيفية الاستفادة منها وإستخدامها الإستخدام الأمثل وتطبيقها عمليًا بما يناسب متطلبات وإحتياجات العصر الذي نحياه، وهو بلا شك يتطلب وجود معلمين ومتعلمين من نوع خاص يستطيعون مواكبة وملاحقة هذا التطور والتغير السريع في مختلف المجالات والتوافق معه، قادرين على الحصول على المعارف والمعلومات وتحليلها والتأكد من مدى صحتها من خلال تقييمها، ثم تقدير مدى قابليتها للتطبيق ومدى الاستفادة منها من خلال عمليتي التعليم والتعلم لتحقيق الأهداف المنشودة.
              </span>
            )}
          </p>
        </div>
        <div className="mt-auto flex justify-end pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpandedIntro(!isExpandedIntro)}
          >
            {isExpandedIntro ? "إخفاء" : "المزيد"}
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Card 2: Goals */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">الأهداف</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
          <p>
            <strong>	الأهداف العامة :</strong>
<br />-يهدف البرنامج إلى تنمية مهارات التدريس الإبداعي لدى معلمي علم النفس بالعراق وأثره في تحسين التواصل المجتمعي والتدفق النفسي لدى طلابهم. 
<br /><strong>	الأهداف الخاصة للبرنامج:</strong> 
<br />-تنمية مهارات تخطيط الإبداعي للدرس في مادة علم النفس.
<br />-تنمية مهارات التحليلل الإبداعي لمحتوى الدرس في مادة علم النفس.
<br />-تنمية مهارات إعداد الأهداف التعليمة بطريقة إبداعية في مادة علم النفس.
<br />-تنمية مهارات التهيئة الإبداعية والتمهيد للدرس في مادة علم النفس.
<br />-تنمية مهارات التعزيز في عملية التدريس.
 {!isExpandedGoals && <span className="dot"> ...</span>}
            {isExpandedGoals && (
              <span className="moreText">
<br />-تنمية مهارات استثارة الدافعية في عملية التدريس.
<br />-تنمية مهارات انتقاء طريقة التدريس المناسبة لمحتوى الدرس في مادة علم النفس.
<br />-تنمية مهارات تحديد واختيار الوسيلة التعليمية المناسبة لتدريس علم النفس.
<br />-تنمية مهارات إعداد وصياغة الأسئلة الصفية في مادة علم النفس.
<br />-تنمية مهارات إدارة الصف بطريقة إبداعية.
<br />-تنمية مهارات تقويم المحتوى في مادة علم النفس.  
<br />-تنمية مهارات الإعداد النهائي للدرس التكنولوجي وتنفيذه في علم النفس.

            </span>
            )}
          </p>
        </div>
        <div className="mt-auto flex justify-end pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpandedGoals(!isExpandedGoals)}
          >
            {isExpandedGoals ? "إخفاء" : "المزيد"}
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Card 3: Content */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">المحتوى</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
          <p>
<strong> مهارات التدريس الإبداعي </strong>
<br />- الموديول الأول: مهارات تخطيط الدرس.
<br />- الوحدة الثانية: مهارات تنفيذ الدرس.
<br />- الموديول الثالث: التقويم.
<br />- الموديول الرابع: إعداد الدروس تكنولوجيًا.
    
 </p>
        </div>
      </CardContent>
    </Card>


  </div>
</div>

  );
}
