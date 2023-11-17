"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewUserForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (evt) => {
        evt.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        const res = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            const response = await res.json();
            setSuccessMessage("");
            setErrorMessage(response.message);
        } else {
            const response = await res.json();
            setErrorMessage("");
            setSuccessMessage(response.message);
            router.refresh();
            // router.push("/");
        }
    };

    return (
        <section>
            <form onSubmit={handleFormSubmit} className="max-w-md space-y-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Jane Doe"
                        required
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="jane@mail.com"
                        required
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder="* * * *"
                        required
                    />
                </div>

                <input
                    type="submit"
                    className="my-2 px-6 py-2 font-semibold text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 ring-offset-1 rounded-full cursor-pointer"
                    value="Create user"
                />
            </form>

            <div className="my-4">
                {successMessage && (
                    <p className="font-semibold text-green-500">
                        {successMessage}
                    </p>
                )}
                {errorMessage && (
                    <p className="font-semibold text-red-500">{errorMessage}</p>
                )}
            </div>
        </section>
    );
}
