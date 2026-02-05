import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://blast-radius.dev'), // поменяй на реальный домен
    title: 'Blast Radius | Impact analysis for code changes',
    description:
        'See the blast radius of every code change before you merge. Blast Radius maps the real downstream impact of a pull request so engineering teams can review and ship with confidence.',
    openGraph: {
        title: 'Blast Radius | Impact analysis for code changes',
        description:
            'Understand the real downstream impact of code changes before they reach production.',
        type: 'website',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
