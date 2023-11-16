import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import AppLink from "./AppLink";

const navigation = [
    { name: "Home", href: "/" },
    { name: "C-Member", href: "/client-member" },
    { name: "S-Member", href: "/server-member" },
    { name: "Public", href: "/public" },
    { name: "Create User", href: "/create-user" },
    // { name: "User", href: "/user" },
    // { name: "Profile", href: "/profile" },
];

export default async function Header() {
    const session = await getServerSession(authOptions);

    return (
        <header>
            <nav className="px-6 py-2 w-fit mx-auto flex flex-wrap justify-center gap-2 text-zinc-600 bg-white ring-1 ring-zinc-200 backdrop-filter backdrop-blur-lg bg-opacity-60 rounded-md md:rounded-full uppercase select-none">
                {navigation.map((item) => (
                    <AppLink
                        key={item.href}
                        name={item.name}
                        href={item.href}
                    />
                ))}
                {session ? (
                    <AppLink
                        name="Sign out"
                        href="/api/auth/signout?callbackUrl=/"
                    />
                ) : (
                    <AppLink
                        name="Sign in"
                        href="/api/auth/signin?callbackUrl=/client-member"
                    />
                )}
            </nav>
        </header>
    );
}
