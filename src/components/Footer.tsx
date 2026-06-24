"use client";

import Link from "next/link";
interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {}

function Linkedin({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Youtube({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2a29 29 0 0 0-.46 5.33 29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function Github({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-white/5 pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo1.png"
                alt="Thraxia Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Geleceği şekillendiren premium yazılım, yapay zeka ve otomasyon çözümleriyle işletmenizi bir adım öne taşıyoruz.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-foreground mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary transition-colors">Hizmetler</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition-colors">Çözüm Alanları</Link></li>
              <li><Link href="#case-studies" className="hover:text-primary transition-colors">Başarı Hikayeleri</Link></li>
              <li><Link href="/request" className="hover:text-primary transition-colors">Proje Başlat</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-foreground mb-4">Yasal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Kullanım Koşulları</Link></li>
              <li><Link href="/kvkk" className="hover:text-primary transition-colors">KVKK Aydınlatma Metni</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Çerez Politikası</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-foreground mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@thraxia.com</li>
              <li>+90 (555) 123 45 67</li>
              <li>Teknopark İstanbul, Pendik</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Thraxia Technology. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Powered by AI & Passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
