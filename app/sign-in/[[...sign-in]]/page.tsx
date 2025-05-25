import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex justify-center py-24">
            < SignIn />
        </div>



    );
}