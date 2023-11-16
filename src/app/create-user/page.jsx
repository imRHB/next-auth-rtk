import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: "Create User",
    description: "Create new user",
};

export default async function CreateUser() {
    const session = await getServerSession(authOptions);

    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">New user</h3>

                <p>
                    Create new user, options available only for{" "}
                    <code>ADMIN</code> role!
                </p>

                {session?.user?.role === "ADMIN" && (
                    <div>
                        <p className="font-semibold mb-2">
                            You should see this page only if you have the{" "}
                            <code>ADMIN</code> role
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
