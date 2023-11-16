export const metadata = {
    title: "Server Member",
    description: "Server side rendering",
};

export default function ServerMember() {
    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Server</h3>

                <p>Server side rendering!</p>
            </div>
        </section>
    );
}
