export const metadata = {
    title: "Access Denied",
    description: "Access denied, authorization failed!",
};

export default async function DeniedPage() {
    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Access Denied</h3>

                <p className="font-semibold text-red-500">
                    You are not authorized to access the page you are trying to
                    access!
                </p>
            </div>
        </section>
    );
}
