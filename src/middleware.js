import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export { default } from "next-auth/middleware";

export default withAuth(
    function middleware(req) {
        // write role base logic here as much as needed
        if (
            req.nextUrl.pathname.startsWith("/admin") &&
            req.nextauth.token.role !== "ADMIN"
        ) {
            return NextResponse.rewrite(new URL("/denied", req.url));
        }
    },
    {
        callbacks: {
            // this should be returned boolean value
            // for true case, above middleware function will be called
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/protected/:path*", "/admin"],
};
