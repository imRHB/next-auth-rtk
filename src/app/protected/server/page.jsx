import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
    title: "Protected (Server)",
    description: "Protected page with server side rendering!",
};

export default async function ProtectedServerPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/protected/server");
    }

    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Protected (Server)</h3>

                <p>Protected page with server side rendering!</p>
                <div className="border-t border-dashed my-4" />
                <p className="font-semibold">
                    You are seeing this page, cause you have authorized
                    yourself!
                </p>
            </div>
        </section>
    );
}
