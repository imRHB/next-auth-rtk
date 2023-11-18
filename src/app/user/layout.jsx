import TextLink from "@/components/TextLink";

export const metadata = {
    title: "User",
    description: "User information!",
};

async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    return res.json();
}

export default async function RootLayout({ children }) {
    const users = await getServerSideProps();

    return (
        <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 sm:divide-x">
            <nav className="flex flex-col justify-center gap-1 text-zinc-600 uppercase select-none">
                {users.map((user) => (
                    <TextLink
                        key={user.id}
                        name={user.name}
                        href={`/user/${user.id}`}
                    />
                ))}
            </nav>

            <main className="sm:col-span-3 sm:pl-6">{children}</main>
        </section>
    );
}
