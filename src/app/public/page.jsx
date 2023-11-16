export const metadata = {
    title: "Public",
    description: "Public page view",
};

export default function Public() {
    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Public</h3>

                <p>
                    Public page view, you don&apos;t need to authorize yourself!
                </p>
            </div>
        </section>
    );
}
