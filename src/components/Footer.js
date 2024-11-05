export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-center text-gray-400">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} EDevLens. All rights reserved.
      </div>
    </footer>
  );
}
