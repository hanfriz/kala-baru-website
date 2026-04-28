import "./globals.css";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-neutral-950 dark:text-gray-100">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}