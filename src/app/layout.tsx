import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Project Fit - v1.0.1</title>
        <meta name='description' content='' />
        <link rel='icon' href='https://github.com/BPM94/TTMD/raw/main/calendarioFavIcon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className="h-[100dvh] w-[100dvw]"
      >
        {children}
      </body>
    </html>
  );
}
