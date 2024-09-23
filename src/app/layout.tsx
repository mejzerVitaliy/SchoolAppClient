import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "Великодальницький ліцей №1",
    description: "Офіційний сайт Великодальницького ліцею №1 Великодальницької сільської ради Одеського району Одеської області",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
