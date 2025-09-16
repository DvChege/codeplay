import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "CodePlay",
  description: "Interactive Coding Platform"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}