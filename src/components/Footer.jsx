import { personal } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-zinc-700 text-[11px] font-mono tracking-widest select-none">
          © {year} {personal.name}
        </p>
      </div>
    </footer>
  );
}
