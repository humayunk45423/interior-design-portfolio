import "../styles/tailwind.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Cinematic Interior Design Portfolio",
  description: "A cinematic portfolio experience like a luxury digital exhibition.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
