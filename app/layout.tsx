import Footer from "./Footer";
import Header from "./Header";
import "./global.css";

export const metadata = {
    title: "Klasium",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
