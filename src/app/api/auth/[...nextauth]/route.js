import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GithubProvider({
            profile(profile) {
                console.log("GITHUB PROFILE", profile);

                let userRole = "USER";

                if (profile?.email === "rhbabu3@gmail.com") {
                    userRole = "ADMIN";
                }

                return {
                    ...profile,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            profile(profile) {
                console.log("GOOGLE PROFILE", profile);

                let userRole = "USER";

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;

            return token;
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role;

            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
