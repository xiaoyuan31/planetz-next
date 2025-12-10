import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Planetz",
  description: "Explore planets and moons"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-20 bg-gradient-to-br from-[#0b0d14] via-[#111827] to-[#1e1b4b]"> 
        <Navbar />
        <main className="max-w-4xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
