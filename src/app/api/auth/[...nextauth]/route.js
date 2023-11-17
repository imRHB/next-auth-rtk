import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import User from "@/app/(models)/User";

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
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "jane@mail.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "* * * *",
                },
            },
            async authorize(credentials) {
                try {
                    const foundUser = await User.findOne({
                        email: credentials.email,
                    })
                        .lean()
                        .exec();

                    if (foundUser) {
                        const match = await bcrypt.compare(
                            credentials.password,
                            foundUser.password
                        );

                        if (match) {
                            delete foundUser.password;

                            foundUser["role"] = "USER";

                            return foundUser;
                        }
                    }
                } catch (error) {
                    console.error(error);
                }

                return null;
            },
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
        /* async jwt({ token, trigger, session }) {
            if (trigger === "update" && session?.name) {
                token.name = session.name;
            }

            return token;
        },
        adapter: MongoDBAdapter(clientPromise),
        session: {
            strategy: "jwt",
        }, */
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
