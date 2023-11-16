import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: "Server Member",
    description: "Server side rendering",
};

export default async function ServerMember() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/server-member");
    }

    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Server</h3>

                <p>Server side rendering!</p>

                {session?.user && (
                    <div>
                        <p className="font-semibold mb-2">
                            You are seeing this page, cause you have authorized
                            yourself!
                        </p>
                        <pre>{session?.user?.email}</pre>
                        <pre>{session?.user?.name}</pre>
                        <pre>{session?.user?.role}</pre>
                    </div>
                )}
            </div>
        </section>
    );
}
