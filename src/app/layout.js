import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>EDevLens Portfolio</title>
        <meta
          name="description"
          content="Portfolio of EDevLens showcasing projects and skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 mt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
