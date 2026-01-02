import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* NAVBAR (SELALU DI ATAS) */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
          <div className="flex justify-center gap-8 py-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/location">Location</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/promotions">Promotions</Link>
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
