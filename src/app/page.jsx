export default function Home() {
    return (
        <section className="text-zinc-700 space-y-8">
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Next JS</h3>

                <p>
                    Next.js is a popular open-source React framework built by
                    Vercel that enables developers to build fast and scalable
                    web applications. It simplifies the creation of React
                    applications by providing a set of tools and features that
                    enhance the development experience.
                </p>
                <p>
                    Next.js has gained popularity in the web development
                    community due to its versatility, performance optimization,
                    and ease of use in building modern web applications and
                    websites.
                </p>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Next Auth</h3>

                <p>
                    NextAuth.js is a flexible authentication library for Next.js
                    applications. It provides a streamlined way to implement
                    authentication in Next.js projects by supporting various
                    authentication providers, such as OAuth, social logins,
                    email/password, and more.
                </p>
                <p>
                    NextAuth.js simplifies the implementation of authentication
                    and enables developers to quickly integrate authentication
                    providers and manage user sessions in Next.js applications.
                    Its flexibility and wide range of supported authentication
                    providers make it a popular choice for handling
                    authentication in Next.js projects.
                </p>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">RTK</h3>

                <p>
                    Redux Toolkit Query is an integral part of Redux Toolkit,
                    providing a powerful and efficient way to manage
                    asynchronous data fetching and state management in
                    Redux-powered applications. It simplifies the process of
                    integrating server data into the Redux store, offering a
                    standardized approach for handling API requests and caching
                    data.
                </p>
                <p>
                    Overall, Redux Toolkit Query simplifies the complex process
                    of managing asynchronous data in Redux applications,
                    providing a convenient and efficient solution for handling
                    API requests, caching, and state management. It&apos;s
                    particularly useful for applications that heavily rely on
                    Redux for state management and need to manage data fetched
                    from APIs.
                </p>
            </div>
        </section>
    );
}
