import { TemplateRenderer } from "@/components/TemplateRenderer";

export default function Home() {
  return (
    <main className="relative">
      <TemplateRenderer />
      
      {/* Footer */}
      <footer className="relative py-12 border-t border-white/20 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Portfolio. Built with Next.js, Framer Motion & GSAP.
          </p>
        </div>
      </footer>
    </main>
  );
}
