"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLink({ name, href, ...props }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`my-2 px-6 py-2 font-semibold hover:bg-zinc-100 rounded-full ${
                pathname === href && "text-violet-500 bg-zinc-100"
            }`}
            {...props}
        >
            {name}
        </Link>
    );
}
