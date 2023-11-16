export const metadata = {
    title: "Profile",
    description: "Profile information for the signed in user!",
};

export default function Profile() {
    return (
        <section>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Profile</h3>

                <p>Sign in to see your profile info!</p>
            </div>
        </section>
    );
}
