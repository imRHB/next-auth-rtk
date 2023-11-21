"use client";

import { Provider } from "react-redux";

import rtkStore from "@/redux/store/rtkStore";

export default function RtkProvider({ children }) {
    return <Provider store={rtkStore}>{children}</Provider>;
}
