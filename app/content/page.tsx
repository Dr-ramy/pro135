import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import VideoGallery from "@/components/content/mainitems/MainVideo";
import Header from "@/components/layout/Header";

export default async function ContentPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const groupid = Number(session.user.groupid); // ✅ يحوله لرقم
  const allowedGroups = [1, 2, 3, 10];

  return (
    <div className="w-full h-full overflow-hidden">
      {(groupid === 10 || groupid === 1) && (
        <>
          <Header courseTitle="محتوى التعلم " />
          <VideoGallery />
        </>
      )}
      {groupid === 2 && (
        <>
          <Header courseTitle="محتوى التعلم " />
          <VideoGallery />
        </>
      )}
      {groupid === 3 && (
        <>
          <Header courseTitle="محتوى التعلم " />
          <VideoGallery />
        </>
      )}
      {!allowedGroups.includes(groupid) && (
        <p className="text-red-500 p-4">أنت غير مصرح لك بمشاهدة هذا المحتوى.</p>
      )}
    </div>
  );
}
