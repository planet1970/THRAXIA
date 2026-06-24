"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Cpu,
  Rocket,
  Shield,
  Smartphone,
  Globe,
  Sparkles,
  CheckCircle2,
  Workflow,
  Settings,
  Calendar,
  Layers,
  FileText,
  MessageSquare,
  X,
  Palette,
  Clock,
  Briefcase
} from "lucide-react";
import Link from "next/link";

interface ServiceDetail {
  title: string;
  desc: string;
  longDesc: string;
  subServices: string[];
  techStack: string[];
  timeline: string;
  icon: React.ReactNode;
}

export default function Home() {
  const [activeStep, setActiveStep] = useState(0); // Step 1 active by default
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  
  // Theme State
  const [activeTheme, setActiveTheme] = useState<"violet" | "emerald" | "ocean" | "sunset">("violet");

  const themes = {
    violet: {
      background: "#03030f",
      primary: "#9082ec",
      secondary: "#2f80ed",
      border: "rgba(144, 130, 236, 0.18)",
      card: "rgba(13, 13, 33, 0.45)",
      glow: "rgba(144, 130, 236, 0.25)"
    },
    emerald: {
      background: "#020804",
      primary: "#10b981",
      secondary: "#34d399",
      border: "rgba(16, 185, 129, 0.18)",
      card: "rgba(10, 20, 15, 0.45)",
      glow: "rgba(16, 185, 129, 0.25)"
    },
    ocean: {
      background: "#020715",
      primary: "#2563eb",
      secondary: "#06b6d4",
      border: "rgba(37, 99, 235, 0.18)",
      card: "rgba(12, 17, 35, 0.45)",
      glow: "rgba(37, 99, 235, 0.25)"
    },
    sunset: {
      background: "#0a0303",
      primary: "#f97316",
      secondary: "#f43f5e",
      border: "rgba(249, 115, 22, 0.18)",
      card: "rgba(25, 10, 10, 0.45)",
      glow: "rgba(249, 115, 22, 0.25)"
    }
  };

  const currentTheme = themes[activeTheme];

  const themeVars = {
    "--background": currentTheme.background,
    "--primary": currentTheme.primary,
    "--secondary": currentTheme.secondary,
    "--border": currentTheme.border,
    "--card": currentTheme.card,
    "--ring": currentTheme.primary
  } as React.CSSProperties;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatingIcons = [
    { icon: <Globe className="w-6 h-6 text-primary" />, x: "12%", y: "22%", color: "bg-primary/10 border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.15)]", delay: 0 },
    { icon: <Cpu className="w-6 h-6 text-secondary" />, x: "85%", y: "25%", color: "bg-secondary/10 border-secondary/20 shadow-[0_0_15px_rgba(var(--secondary),0.15)]", delay: 1.5 },
    { icon: <Shield className="w-6 h-6 text-primary" />, x: "8%", y: "52%", color: "bg-primary/10 border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.15)]", delay: 0.8 },
    { icon: <Code2 className="w-6 h-6 text-secondary" />, x: "15%", y: "78%", color: "bg-secondary/10 border-secondary/20 shadow-[0_0_15px_rgba(var(--secondary),0.15)]", delay: 2.2 },
    { icon: <Smartphone className="w-6 h-6 text-primary" />, x: "82%", y: "75%", color: "bg-primary/10 border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.15)]", delay: 1.2 },
    { icon: <Rocket className="w-6 h-6 text-secondary" />, x: "88%", y: "48%", color: "bg-secondary/10 border-secondary/20 shadow-[0_0_15px_rgba(var(--secondary),0.15)]", delay: 0.5 },
  ];

  const services: ServiceDetail[] = [
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "AI Chatbot",
      desc: "AI destekli müşteri temsilcileri, GPT ve RAG entegrasyonlu kurumsal bilgi asistanları ve sesli asistan çözümleri.",
      longDesc: "Kurumunuzun kendi bilgi belgeleri, SSS kılavuzları ve veri tabanları ile eğitilmiş, müşterilerinizi veya personelinizi insan benzeri bir doğrulukla yönlendiren yapay zeka asistanları ve chatbot mimarileri geliştiriyoruz.",
      subServices: [
        "RAG (Geri Getirmeli Artırılmış Üretim) Altyapısı",
        "Kurumsal Bilgi Bankası Entegrasyonu",
        "Sesli Yapay Zeka (Voice AI) Çözümleri",
        "Müşteri Destek Ekipleri İçin Akıllı Yardımcılar"
      ],
      techStack: ["OpenAI / Anthropic APIs", "LangChain / LlamaIndex", "Vector DBs (Pinecone, PGVector)", "Python / NestJS"],
      timeline: "3 - 5 Hafta"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "WhatsApp Bot",
      desc: "WhatsApp Business API ile 7/24 kesintisiz müşteri desteği sağlayan akıllı mesajlaşma botları.",
      longDesc: "Müşterilerinizin en çok kullandığı anlık mesajlaşma platformu olan WhatsApp üzerinde sipariş alan, randevu oluşturan, otomatik SSS yanıtlayan ve gerektiğinde canlı temsilciye aktarım sağlayan entegre bot çözümleridir.",
      subServices: [
        "WhatsApp Business Cloud API Entegrasyonu",
        "Ürün/Hizmet Kataloğu & Sipariş Yönetimi",
        "Toplu Kampanya, Bildirim ve Duyuru Gönderimi",
        "Gelişmiş Canlı Sohbet Temsilcisi Arayüzü"
      ],
      techStack: ["Meta Business Cloud API", "Node.js / NestJS", "PostgreSQL", "n8n Automation"],
      timeline: "2 - 4 Hafta"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Telegram Bot",
      desc: "Sipariş yönetimi, duyuru, bildirim ve entegre iş akışlarını otomatik yöneten akıllı Telegram botları.",
      longDesc: "Zengin API kütüphanesi ve mini WebApp desteğiyle Telegram üzerinde çalışan, kanallarınızı ve gruplarınızı yöneten, kullanıcı etkileşimini otomatize eden ve harici veri tabanlarıyla çift yönlü veri transferi gerçekleştiren botlar.",
      subServices: [
        "Telegram WebApp Entegre Arayüzleri",
        "Kanal ve Grup Moderasyon Otomasyonu",
        "Anlık Bildirim, Rapor ve Alert Gönderim Sistemleri",
        "Özel E-Ticaret ve Ödeme Altyapıları"
      ],
      techStack: ["Telegraf.js", "React (WebApp Arayüzleri İçin)", "NestJS / Express", "Redis Caching"],
      timeline: "2 - 3 Hafta"
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Web Development",
      desc: "Kurumsal web siteleri, portal sistemleri, e-ticaret siteleri ve yüksek performanslı özel yazılım projeleri.",
      longDesc: "Markanızın dijital vitrinini en üst seviyeye taşıyan; modern tasarım trendlerine uygun, SEO dostu, ultra hızlı açılan ve tüm mobil cihazlarla tam uyumlu web sayfaları, portallar ve ticari platformlar inşa ediyoruz.",
      subServices: [
        "Kurumsal Tanıtım Siteleri & Landing Page",
        "E-Ticaret ve Çok Kanallı Satış Sistemleri",
        "Müşteri / Bayi İlişkileri Giriş Portalları",
        "SEO, Performans ve Güvenlik Optimizasyonu"
      ],
      techStack: ["Next.js (React)", "Framer Motion", "TailwindCSS", "PostgreSQL / Prisma"],
      timeline: "4 - 8 Hafta"
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "SaaS Development",
      desc: "Bulut tabanlı abonelik sistemleri, gelişmiş paneller, özel ERP, CRM ve HR yönetim altyapıları.",
      longDesc: "Bulut tabanlı çalışan, çok kullanıcılı (multi-tenant) abonelik ve lisans yönetim sistemleri, analitik takip panelleri, entegre HR (İnsan Kaynakları), özel CRM/ERP, iş takip araçları ve yönetim altyapıları geliştiriyoruz.",
      subServices: [
        "LMS (Eğitim Yönetim Sistemleri)",
        "Özel CRM, ERP ve Tedarik Zinciri SaaS Çözümleri",
        "HR / Personel ve İşe Alım Takip Platformları",
        "Stripe, Iyzico Ödeme & Abonelik Modülleri"
      ],
      techStack: ["Next.js App Router", "TypeScript", "NestJS / Go", "Docker / AWS / Cloudflare"],
      timeline: "8 - 12 Hafta"
    },
    {
      icon: <Workflow className="w-6 h-6 text-primary" />,
      title: "Digital Transformation",
      desc: "N8N workflow sistemleri, CRM/ERP entegrasyonları, veri dijitalleştirme ve iş süreçleri otomasyonu.",
      longDesc: "İşletmenizin manuel olarak yürüttüğü e-posta takibi, fatura işleme, veri girişi gibi tüm süreçleri birbirine bağlı otomasyon senaryoları ile entegre ederek zaman maliyetini düşürüp verimliliği maksimize ediyoruz.",
      subServices: [
        "n8n / Zapier Süreç Otomasyon Senaryoları",
        "Veri Dijitalleştirme & Yapay Zeka Destekli OCR",
        "ERP (SAP, Logo vb.) ve CRM Çift Yönlü Entegrasyon",
        "E-Posta & Bildirim Yönetim Akışları"
      ],
      techStack: ["n8n Enterprise", "Python Scripts", "OCR API Services", "PostgreSQL / MongoDB"],
      timeline: "3 - 6 Hafta"
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: <FileText className="w-5 h-5 text-primary" />,
      title: "Proje Başvurusu",
      desc: "Sihirbazımızı doldurarak proje fikirlerinizi, iş hedeflerinizi ve bütçe aralığınızı bizimle hızlıca paylaşırsınız."
    },
    {
      step: "02",
      icon: <Calendar className="w-5 h-5 text-secondary" />,
      title: "Keşif Görüşmesi",
      desc: "Detayları netleştirmek ve size en uygun çözüm yolunu çizmek için tamamen ücretsiz bir ön görüşme planlarız."
    },
    {
      step: "03",
      icon: <Layers className="w-5 h-5 text-primary" />,
      title: "Yol Haritası & Planlama",
      desc: "Projenizin kapsamını, zaman çizelgesini ve bütçe planını içeren detaylı bir yol haritası sunarız."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden transition-colors duration-500" style={themeVars}>
      {/* Background radial soft light */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
        {/* Orbit lines & central glowing sphere (Ref: Ek Resim 1) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* Central Glowing Orb */}
          <div className="absolute w-[360px] h-[360px] bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-3xl shadow-[0_0_100px_var(--border)] rounded-full blur-[10px]" />
          
          {/* Concentric Orbits */}
          <div className="absolute w-[440px] h-[440px] border border-white/5 rounded-full" />
          <div className="absolute w-[620px] h-[620px] border border-white/5 rounded-full border-dashed" />
          <div className="absolute w-[840px] h-[840px] border border-white/5 rounded-full" />
          
          {/* Mini orbit dots */}
          <div className="absolute w-[620px] h-[620px] rounded-full animate-[spin_50s_linear_infinite]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]" />
          </div>
        </div>

        {/* Orbiting Floating 3D Icons (Ref: Ek Resim 1) */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: item.delay
                },
                opacity: { duration: 1 },
                scale: { duration: 1 }
              }}
              className={`absolute hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md z-10`}
              style={{ left: item.x, top: item.y }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/25 text-primary text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_15px_var(--border)]"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Geleceğin Teknolojisi Bugün</span>
            </motion.div>
            
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-heading font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
            >
              Fikirlerinizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Koda</span>, <br />
              Vizyonunuzu <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Geleceğe</span> Dönüştürüyoruz.
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Yapay zeka destekli, ölçeklenebilir ve yenilikçi yazılım çözümleriyle işletmenizin dijital dönüşümüne liderlik ediyoruz.
            </motion.p>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/request">
                <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full shadow-lg shadow-primary/20 w-full sm:w-auto transition-all duration-300">
                  Ücretsiz Ön Görüşme <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-border/80 hover:bg-white/5 w-full sm:w-auto">
                Projelerimizi İncele
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section (Ref: Ek Resim 3 - Brighter & More Eye-catching) */}
      <section id="services" className="py-24 relative overflow-hidden bg-background">
        {/* Glow particle mesh backdrop for 3D card layout */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[radial-gradient(circle,_rgba(var(--primary),0.22)_0%,_rgba(var(--secondary),0.15)_40%,_transparent_70%)] pointer-events-none z-0 blur-[30px]" style={{
          backgroundImage: `radial-gradient(circle, ${currentTheme.primary}38 0%, ${currentTheme.secondary}26 40%, transparent 70%)`
        }} />
        
        {/* Cosmic ring sphere mesh background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-primary/20 rounded-full blur-[1px] opacity-60 animate-[spin_50s_linear_infinite] pointer-events-none z-0">
          <div className="absolute inset-4 border border-primary/20 rounded-full border-dashed" />
          <div className="absolute inset-10 border border-secondary/15 rounded-full" />
          <div className="absolute inset-20 border border-primary/10 rounded-full border-dashed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Uçtan Uca Çözümler</h2>
            <p className="text-muted-foreground text-sm md:text-base">İşletmenizin ihtiyacı olan tüm dijital süreçleri tek çatı altında topluyoruz.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="relative p-8 rounded-[24px] bg-[#070819]/90 border border-primary/20 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),_0_0_15px_rgba(var(--primary),0.05)] hover:border-primary/50 hover:shadow-[0_25px_50px_-10px_var(--border),_0_0_30px_var(--border)] transition-all group hover:-translate-y-3 duration-500 flex flex-col justify-between min-h-[360px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)] group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full text-center py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary text-primary-foreground hover:text-white font-semibold text-xs transition-all duration-300 tracking-wider shadow-[0_0_15px_rgba(var(--primary),0.15)] hover:shadow-[0_0_25px_rgba(var(--primary),0.4)] text-primary"
                  >
                    Devamını Oku
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Flow Section (Ref: Ek Resim 2) */}
      <section id="flow" className="py-24 relative bg-card/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/5 border border-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(var(--secondary),0.1)]">
              Built for Performance
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight leading-tight">
              Dijital Başarıya Ulaşmanın <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Akıllı Akış Süreci</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col justify-between overflow-hidden min-h-[380px] cursor-pointer group ${
                    isActive
                      ? "bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/15 border-primary/50 shadow-[0_20px_40px_rgba(var(--primary),0.15)] -translate-y-2"
                      : "bg-[#0b0c1e]/60 border-border/80 hover:border-primary/30"
                  }`}
                >
                  {/* Large backdrop number */}
                  <span className={`absolute right-4 top-2 text-[120px] font-heading font-black pointer-events-none select-none transition-all duration-500 leading-none ${
                    isActive 
                      ? "text-primary/15 scale-105" 
                      : "text-white/[0.02]"
                  }`}>
                    {step.step}
                  </span>

                  {/* Top content */}
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-300 ${
                      isActive ? "bg-primary/20" : "bg-white/5"
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                  </div>

                  {/* Hover indicator details */}
                  <Link href="/request" className="mt-8 block z-10">
                    <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-primary font-semibold transition-colors hover:opacity-80">
                      Başvuru Yap <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated visual backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(var(--primary),0.1)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-primary/5" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Projenizi Hayata Geçirelim</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            İhtiyaçlarınızı anlamak ve size en uygun çözümü sunmak için sihirbazımızı kullanın.
          </p>
          <Link href="/request">
            <Button size="lg" className="h-14 px-10 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full shadow-2xl shadow-primary/30 transition-all duration-300">
              Projeyi Başlat <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Floating Theme Switcher Widget */}
      <div className="fixed bottom-6 right-6 z-50 bg-[#070819]/80 backdrop-blur-xl border border-white/10 p-3 rounded-full flex items-center gap-2.5 shadow-2xl">
        <Palette className="w-4 h-4 text-muted-foreground ml-1.5" />
        <button
          onClick={() => setActiveTheme("violet")}
          className={`w-6 h-6 rounded-full bg-[#9082ec] border-2 transition-transform duration-300 ${
            activeTheme === "violet" ? "border-white scale-110" : "border-transparent"
          }`}
          title="Cyber Violet"
        />
        <button
          onClick={() => setActiveTheme("emerald")}
          className={`w-6 h-6 rounded-full bg-[#10b981] border-2 transition-transform duration-300 ${
            activeTheme === "emerald" ? "border-white scale-110" : "border-transparent"
          }`}
          title="Emerald Neon"
        />
        <button
          onClick={() => setActiveTheme("ocean")}
          className={`w-6 h-6 rounded-full bg-[#2563eb] border-2 transition-transform duration-300 ${
            activeTheme === "ocean" ? "border-white scale-110" : "border-transparent"
          }`}
          title="Deep Ocean"
        />
        <button
          onClick={() => setActiveTheme("sunset")}
          className={`w-6 h-6 rounded-full bg-[#f97316] border-2 transition-transform duration-300 ${
            activeTheme === "sunset" ? "border-white scale-110" : "border-transparent"
          }`}
          title="Sunset Glow"
        />
      </div>

      {/* Premium Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />
            
            {/* Modal container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[#070819] border border-primary/20 rounded-[32px] p-8 md:p-10 shadow-[0_0_60px_rgba(var(--primary),0.15)] z-10 overflow-hidden text-foreground"
            >
              {/* Graphic background glow inside modal */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(var(--primary),0.15)]">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">{selectedService.title}</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground font-semibold">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Ortalama Teslimat: {selectedService.timeline}
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {selectedService.longDesc}
                </p>

                {/* Sub Services */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" /> Neler Sunuyoruz?
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                    {selectedService.subServices.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                    Kullanılan Teknolojiler & Araçlar
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 flex justify-end">
                  <Link href="/request" onClick={() => setSelectedService(null)}>
                    <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 rounded-full px-6 h-12 text-sm shadow-md">
                      Hemen Projeyi Başlat <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
