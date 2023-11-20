"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TextLink({ name, href, ...props }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`px-4 py-2 w-full font-semibold hover:bg-zinc-100 rounded-md ${
                pathname === href && "text-violet-500 bg-zinc-100"
            }`}
            {...props}
        >
            {name}
        </Link>
    );
}
