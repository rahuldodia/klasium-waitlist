import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import "./global.css";

export const metadata = {
    title: "Klasium",
    description:
        "A modern-day ed-tech company that simplifies education with technology.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth font-inter">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
