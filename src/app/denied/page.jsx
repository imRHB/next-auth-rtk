export const metadata = {
    title: "Access Denied",
    description: "Access denied for the current user role!",
};

export default function AccessDenied() {
    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Access Denied</h3>

                <p>
                    You are not authorized to access the page or execute the
                    function!
                </p>
            </div>
        </section>
    );
}
