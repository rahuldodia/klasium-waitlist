"use client";

import { FormEvent, useState } from "react";
const confetti = require("canvas-confetti").default;

export default function JoinTheWaitlist() {
    const [details, setDetails] = useState({ name: "", email: "" });
    const [disabled, setDisabled] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        let flag = false;
        if (details.name === "") {
            setNameError(true);
            flag = true;
        }
        if (details.email === "") {
            setEmailError(true);
            flag = true;
        }
        if (flag) return;
        setDisabled(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(details);

        fetch("/api/waitlist", {
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
            id="waitlist-form"
            className="mt-16 flex w-full items-center max-w-md flex-col"
            onSubmit={handleFormSubmit}
        >
            <input
                type="text"
                maxLength={100}
                className={`w-full border-b-2 py-2 focus:outline-none focus:border-primary-light ${
                    nameError ? "border-[#E55C5C]" : "border-secondary"
                } transition duration-100`}
                placeholder="Full Name"
                value={details.name}
                onChange={(e) => {
                    setNameError(false);
                    setDetails({ ...details, name: e.target.value });
                }}
            />

            <div
                className={`${
                    nameError ? "" : "hidden"
                } text-[#E55C5C] text-left w-full`}
            >
                * Please enter name
            </div>
            <input
                type="email"
                className={`w-full border-b-2 py-2 focus:outline-none focus:border-primary-light ${
                    emailError ? "border-[#E55C5C]" : "border-secondary"
                } transition duration-100`}
                placeholder="Email Address"
                value={details.email}
                onChange={(e) => {
                    setEmailError(false);
                    setDetails({ ...details, email: e.target.value });
                }}
            />
            <div
                className={`${
                    emailError ? "" : "hidden"
                } text-[#E55C5C] text-left w-full`}
            >
                *Please enter email
            </div>
            <button
                className="mt-12 rounded-md border border-green bg-green px-4 py-3 text-base font-medium text-white transition duration-100 hover:bg-white hover:text-green"
                disabled={disabled}
            >
                Join the future of grading
            </button>
        </form>
    );
}
