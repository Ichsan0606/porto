export default function Footer() {
  return (
    <footer className="w-full bg-white border-t py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} Abbah Mitra Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
