"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle2, X } from "lucide-react";
import Link from "next/link";

const projectTypes = [
  "Kurumsal Web Sitesi",
  "E-Ticaret Platformu",
  "Mobil Uygulama",
  "Özel Yazılım Çözümü",
  "Yapay Zeka Entegrasyonu",
  "Diğer"
];

const budgetRanges = [
  "50.000₺ - 100.000₺",
  "100.000₺ - 250.000₺",
  "250.000₺ - 500.000₺",
  "500.000₺+",
  "Henüz Belli Değil"
];

export default function RequestWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    companyName: "",
    industry: "",
    requirements: "",
    budget: "",
    fullName: "",
    email: "",
    phone: ""
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Fake API call
    console.log("Form Submitted:", formData);
    nextStep();
  };

  return (
    <div className="min-h-screen pt-32 md:pt-44 pb-20 flex items-center justify-center">
      <div className="container max-w-3xl mx-auto px-4">
        {step < 6 && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Adım {step} / 5</span>
              <span>%{(step / 5) * 100}</span>
            </div>
            <div className="w-full h-2 bg-card rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Exit Button */}
          <Link
            href="/"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all z-10"
            title="Vazgeç ve Ana Sayfaya Dön"
          >
            <X className="w-5 h-5" />
          </Link>

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            {/* Step 1: Project Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold mb-2">Projenizin türü nedir?</h2>
                <p className="text-muted-foreground mb-8">Size en uygun ekibi yönlendirebilmemiz için projenizi kategorize edelim.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleSelect("projectType", type)}
                      className={`p-4 text-left rounded-xl border transition-all ${
                        formData.projectType === type
                          ? "border-primary bg-primary/10"
                          : "border-white/10 hover:border-primary/50 bg-background/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Company Info */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold mb-2">Firma Bilgileri</h2>
                <p className="text-muted-foreground mb-8">Hangi şirket veya marka için bu projeyi geliştiriyoruz?</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Firma Adı</Label>
                    <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Örn: Thraxia Inc." className="h-12 bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Sektör</Label>
                    <Input id="industry" name="industry" value={formData.industry} onChange={handleChange} placeholder="Örn: E-Ticaret, Sağlık, Eğitim..." className="h-12 bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Requirements */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold mb-2">İhtiyaç Analizi</h2>
                <p className="text-muted-foreground mb-8">Projenizin detaylarından, olmasını istediğiniz özelliklerden bahsedin.</p>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Proje Detayları</Label>
                  <Textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Lütfen aklınızdaki fikri olabildiğince detaylı anlatın..." className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary resize-y" />
                </div>
              </motion.div>
            )}

            {/* Step 4: Budget */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold mb-2">Bütçe Aralığı</h2>
                <p className="text-muted-foreground mb-8">Proje için ayırmayı düşündüğünüz yaklaşık bütçe nedir?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => handleSelect("budget", budget)}
                      className={`p-4 text-left rounded-xl border transition-all ${
                        formData.budget === budget
                          ? "border-primary bg-primary/10"
                          : "border-white/10 hover:border-primary/50 bg-background/50"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Contact */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold mb-2">İletişim Bilgileriniz</h2>
                <p className="text-muted-foreground mb-8">Size nasıl ulaşabiliriz?</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Ad Soyad</Label>
                    <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Adınız Soyadınız" className="h-12 bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Posta Adresi</Label>
                    <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ornek@sirket.com" className="h-12 bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon Numarası</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+90 (555) 000 00 00" className="h-12 bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 6: Success */}
            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-2">Talebiniz Alındı!</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Proje detaylarınızı inceleyip en kısa sürede sizinle iletişime geçeceğiz. Thraxia'yı tercih ettiğiniz için teşekkür ederiz.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8" onClick={() => window.location.href = '/'}>
                  Ana Sayfaya Dön
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 6 && (
            <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
              {step === 1 ? (
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Vazgeç
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" /> Geri
                </Button>
              )}
              {step < 5 ? (
                <Button
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary/90 text-white"
                  disabled={
                    (step === 1 && !formData.projectType) ||
                    (step === 2 && !formData.companyName) ||
                    (step === 3 && !formData.requirements) ||
                    (step === 4 && !formData.budget)
                  }
                >
                  İleri <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-accent hover:bg-accent/90 text-white"
                  disabled={!formData.fullName || !formData.email}
                >
                  Gönder <CheckCircle2 className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
