import { getServerSession } from "next-auth";

import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: "Profile",
    description: "Profile information for the signed in user!",
};

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);

    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Profile</h3>

                {session ? (
                    <div>
                        <p>
                            You are signed in as{" "}
                            <code className="font-semibold">
                                {session?.user?.email}
                            </code>
                        </p>
                        <div className="border-t border-dashed my-4" />
                        <pre>{session?.user?.name}</pre>
                        <pre>{session?.user?.role}</pre>
                    </div>
                ) : (
                    <div>
                        <div className="border-t border-dashed my-4" />
                        <p>
                            <Link
                                href="/api/auth/signin?callbackUrl=/profile"
                                className="font-semibold text-violet-500"
                            >
                                Sign in
                            </Link>{" "}
                            to see your profile info!
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
