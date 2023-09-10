import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton, auth } from "@clerk/nextjs/app-beta";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center space-x-3">
            <h1 className="mt-3 text-5xl font-semibold">Chat with PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Join millions of Students, Researchers and professional to instantly
            answer questions and understand research with Ai
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <h1>fileUpload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started
                  <LogIn className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
