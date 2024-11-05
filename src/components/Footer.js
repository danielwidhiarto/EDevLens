// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white shadow mt-8">
      <div className="container mx-auto px-4 py-4 text-center">
        &copy; {new Date().getFullYear()} EDevLens. All rights reserved.
      </div>
    </footer>
  );
}
