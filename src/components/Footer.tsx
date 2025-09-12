export default function Footer() {
    return (
      <footer className="w-full bg-white border-t py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} MyPorto. All rights reserved.</p>
          <p>Made with ❤️ Next.js + Tailwind</p>
        </div>
      </footer>
    );
  }
  