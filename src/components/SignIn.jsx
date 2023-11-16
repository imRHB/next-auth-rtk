"use client";

import { signIn } from "next-auth/react";

import AppButton from "./AppButton";

export default function SignIn() {
    return <AppButton onClick={signIn}>Sign in</AppButton>;
}
