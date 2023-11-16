"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

/* export const metadata = {
    title: "Client Member",
    description: "Client side rendering",
}; */

export default function ClientMember() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/client-member");
        },
    });

    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Client</h3>

                <p>Client side rendering!</p>

                <div>
                    <p className="font-semibold mb-2">
                        You are seeing this page, cause you have authorized
                        yourself!
                    </p>
                    <pre>{session?.user?.email}</pre>
                    <pre>{session?.user?.name}</pre>
                    <pre>{session?.user?.role}</pre>
                </div>
            </div>
        </section>
    );
}
