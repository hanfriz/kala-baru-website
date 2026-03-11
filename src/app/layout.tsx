import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-neutral-950 dark:text-gray-100">
        {/* NAVBAR (SELALU DI ATAS) */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
          <div className="flex justify-center gap-8 py-4 text-gray-800 dark:text-gray-200">
            <Link className="hover:text-amber-500 transition-colors" href="/">Home</Link>
            <Link className="hover:text-amber-500 transition-colors" href="/about">About</Link>
            <Link className="hover:text-amber-500 transition-colors" href="/products">Products</Link>
            <Link className="hover:text-amber-500 transition-colors" href="/location">Location</Link>
            <Link className="hover:text-amber-500 transition-colors" href="/reviews">Reviews</Link>
            <Link className="hover:text-amber-500 transition-colors" href="/contact">Contact</Link>
            <Link className="hover:text-amber-500 transition-colors" href="/activities">Activities</Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}