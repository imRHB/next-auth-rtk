import NewUserForm from "../(components)/NewUserForm";

export const metadata = {
    title: "Admin",
    description: "Admin page",
};

export default async function AdminPage() {
    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Admin</h3>

                <p>
                    You are viewing this page because you have{" "}
                    <code>ADMIN</code> role!
                </p>
                <div className="border-t border-dashed my-4" />
                <NewUserForm />
            </div>
        </section>
    );
}
