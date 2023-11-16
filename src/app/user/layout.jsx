import TextLink from "@/components/TextLink";

export const metadata = {
    title: "User",
    description: "User information!",
};

const navigation = [
    { name: "User 1", href: "/user/1" },
    { name: "User 2", href: "/user/2" },
    { name: "User 3", href: "/user/3" },
];

export default function RootLayout({ children }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 sm:divide-x">
            <nav className="flex flex-col justify-center gap-1 text-zinc-600 uppercase select-none">
                {navigation.map((item) => (
                    <TextLink
                        key={item.href}
                        name={item.name}
                        href={item.href}
                    />
                ))}
            </nav>

            <main className="sm:col-span-3 sm:pl-6">{children}</main>
        </section>
    );
}
