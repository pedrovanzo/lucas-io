import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Rios",
  description: "Made by @pedrovanzo",
  icons: {
    icon: "/assets/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
        <footer className="flex flex-row justify-between p-12 text-neutral-600 text-sm">
          <span className="font-bold">Lucas Rios</span>
          <span>Made by github/pedrovanzo</span>
        </footer>
      </body>
    </html>
  );
}
