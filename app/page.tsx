// app/page.tsx or pages/index.tsx
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId }: any = auth();
  if (userId) redirect("/dashboard");

  return (
    <div>
      <h1>Welcome to the landing page</h1>
      <SignedIn>
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
        >
          Dashboard
        </Link>
      </SignedIn>
    </div>
  );
}
