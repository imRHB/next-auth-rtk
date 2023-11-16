import "../styles/tailwind.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthProvider from "./(components)/AuthProvider";

export const metadata = {
    title: "Next JS | Next Auth | RTK",
    description: "Implementing Next Auth in Next JS with Redux-Toolkit Query!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <AuthProvider>
                <body className="bg-zinc-50" suppressHydrationWarning={true}>
                    <div className="mx-2 md:mx-0 sticky top-8 z-50">
                        <Header />
                    </div>
                    <main className="container mx-auto max-w-5xl p-2 sm:p-4 md:p-6 xl:p-8">
                        <div className="my-20 min-h-[50vh]">{children}</div>
                    </main>
                    <Footer />
                </body>
            </AuthProvider>
        </html>
    );
}
