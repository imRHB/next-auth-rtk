"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    signIn,
    signOut,
    toggleModerator,
} from "@/redux/features/auth/authSlice";

export default function SimpleSignInForm() {
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.authReducer.value.isAuth);

    const onClickSignIn = () => {
        if (username.length > 0) dispatch(signIn(username));

        setUsername("");
    };

    const onClickSignOut = () => {
        dispatch(signOut());
    };

    const onClickToggle = () => {
        dispatch(toggleModerator());
    };

    return (
        <div className="max-w-md space-y-3">
            <input
                type="text"
                name="username"
                id="username"
                className="block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={(evt) => setUsername(evt.target.value)}
                value={username}
                placeholder="jane-doe"
                required
            />

            <div className="flex gap-4">
                {!isAuth && (
                    <input
                        type="button"
                        onClick={onClickSignIn}
                        className="my-2 px-6 py-2 font-semibold text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 ring-offset-1 rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-sky-200"
                        value="Sign in"
                        disabled={username.length < 1}
                    />
                )}

                {isAuth && (
                    <input
                        type="button"
                        onClick={onClickSignOut}
                        className="my-2 px-6 py-2 font-semibold text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 ring-offset-1 rounded-full cursor-pointer"
                        value="Sign out"
                    />
                )}

                {isAuth && (
                    <input
                        type="button"
                        onClick={onClickToggle}
                        className="my-2 px-6 py-2 font-semibold text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 ring-offset-1 rounded-full cursor-pointer"
                        value="Toggle moderator"
                    />
                )}
            </div>
        </div>
    );
}
