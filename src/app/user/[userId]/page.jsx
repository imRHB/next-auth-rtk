export async function generateMetadata({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params?.userId}`
    );
    const user = await res.json();

    return {
        title: user.name,
        description: `Profile of ${user.name}`,
    };
}

export default async function UserDetails({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params?.userId}`
    );
    const user = await res.json();

    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">{user.name}</h3>

                <div className="flex flex-col">
                    <code>{user.email}</code>
                    <address>
                        {user.address.street}
                        <br />
                        {user.address.city}
                    </address>
                    <tel>{user.phone}</tel>
                    <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {user.website}
                    </a>
                    <p>Works at {user.company.name}</p>
                </div>
            </div>
        </section>
    );
}
