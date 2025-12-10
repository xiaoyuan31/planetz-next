export default function Footer() {
  return (
    <footer className="mt-20 py-6 text-center text-white/60 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <p>© {new Date().getFullYear()} Planetz — All rights reserved.</p>
      <p className="text-xs mt-1 opacity-50">Built by Xiao Yuan 🚀</p>
    </footer>
  );
}
