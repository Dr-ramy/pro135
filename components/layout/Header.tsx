import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ClientDialogWrapper from "@/components/layout/ClientDialogWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome, FaUserShield } from "react-icons/fa";

type HeaderProps = {
  courseTitle: string;
};

export default async function Header({ courseTitle }: HeaderProps) {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full flex items-center justify-between bg-white shadow px-4 py-3 rounded-xl mb-4">
      
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer">
            <FaHome className="h-5 w-5" />
          </Button>
        </Link>
        <div className="text-xl font-semibold text-gray-800">{courseTitle}</div>
      </div>

      <div className="flex items-center gap-4">
        <ClientDialogWrapper />

        {session?.user?.name && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">مرحباً، {session.user.name}</span>

            {session.user.groupid === 10 && (
              <Link href="/admin">
                <Button
                  variant="outline"
                  className="cursor-pointer flex items-center gap-1 text-sm"
                >
                  <FaUserShield className="h-4 w-4" />
                  المشرف
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
