"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLink({ name, href, ...props }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`my-1.5 px-3 py-1 text-sm font-semibold hover:bg-zinc-100 rounded-full ${
                pathname === href &&
                "text-violet-500 bg-zinc-100 ring-1 ring-inset ring-sky-200"
            }`}
            {...props}
        >
            {name}
        </Link>
    );
}
