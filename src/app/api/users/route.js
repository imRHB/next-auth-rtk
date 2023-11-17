import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import User from "@/app/(models)/User";

export async function POST(req) {
    try {
        const userData = await req.json();

        // confirm data exists
        if (!userData?.email || !userData?.password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // check duplicate email address
        const duplicateEmail = await User.findOne({ email: userData.email })
            .lean()
            .exec();

        if (duplicateEmail) {
            return NextResponse.json(
                { message: "Email is already exists" },
                { status: 409 }
            );
        }

        const hashPassword = await bcrypt.hash(userData.password, 12);
        userData.password = hashPassword;

        await User.create(userData);
        return NextResponse.json(
            { message: "New user created" },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
