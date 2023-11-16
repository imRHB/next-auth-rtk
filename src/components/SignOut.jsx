"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
    function handleSignOut() {
        signOut({ redirect: false });
    }

    return (
        <button
            onClick={() => handleSignOut()}
            className="my-2 px-6 py-2 font-semibold text-zinc-50 bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 ring-offset-1 rounded-full"
        >
            Sign out
        </button>
    );
}
