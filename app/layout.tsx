import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Planetz",
  description: "Explore planets and moons"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20"> 
        <Navbar />
        <main className="max-w-4xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
