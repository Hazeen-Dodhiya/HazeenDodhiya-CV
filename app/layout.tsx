import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Hazeen Portfolio",
  description: "CV Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">

        {/* NAVBAR - shows on every page */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}