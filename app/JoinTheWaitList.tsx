"use client";

import { FormEvent, useState } from "react";
const confetti = require("canvas-confetti").default;

export default function JoinTheWaitlist() {
    const [details, setDetails] = useState({ name: "", email: "" });
    const [disabled, setDisabled] = useState(false);

    const handleFormSubmit = (e: FormEvent) => {
        setDisabled(true);
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(details);

        fetch(`${process.env.NEXT_PULIC_HOST_URL}/api/waitlist`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        })
            .then(() => {
                setDisabled(false);
                setDetails({ name: "", email: "" });
                confetti({
                    angle: 45,
                    particleCount: 500,
                    spread: 90,
                    startVelocity: 100,
                    origin: {
                        x: 0,
                        y: 1,
                    },
                });
                confetti({
                    angle: 135,
                    particleCount: 500,
                    spread: 90,
                    startVelocity: 100,
                    origin: {
                        x: 1,
                        y: 1,
                    },
                });
            })
            .catch((error) => {
                setDisabled(false);
            });
    };

    return (
        <form
            className="mt-16 flex w-full items-center max-w-md flex-col"
            onSubmit={handleFormSubmit}
        >
            <input
                type="text"
                maxLength={10}
                className="border-secondary w-full border-b-2 py-2 focus:outline-none"
                placeholder="Full Name"
                value={details.name}
                onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                }
            />
            <input
                type="email"
                className="border-secondary w-full border-b-2 py-2 focus:outline-none"
                placeholder="Email Address"
                value={details.email}
                onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                }
            />
            <button
                className="mt-12 rounded-md bg-green-400 px-4 py-3 text-base font-medium text-white"
                disabled={disabled}
            >
                Join the future of grading
            </button>
        </form>
    );
}
