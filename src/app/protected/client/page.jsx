"use client";

import { useSession } from "next-auth/react";

export default function ProtectedClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/protected/client");
        },
    });

    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Protected (Client)</h3>

                <p>Protected page with client side rendering!</p>
                <div className="border-t border-dashed my-4" />
                <p className="font-semibold">
                    You are seeing this page, cause you have authorized
                    yourself!
                </p>
                <pre>{session?.user?.email}</pre>
            </div>
        </section>
    );
}
