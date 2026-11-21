import type { Lang } from "@/content/types";

export type Dict = {
  nav: { about: string; experience: string; skills: string; certificates: string; education: string; contact: string };
  hero: { greeting: string; cta: string; downloadCv: string; available: string };
  sections: {
    about: string;
    experience: string;
    skills: string;
    certificates: string;
    research: string;
    education: string;
    contact: string;
  };
  experience: { clients: string };
  certificate: { view: string; download: string; close: string };
  contact: {
    heading: string;
    sub: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    unavailable: string;
    invalid: string;
    tooMany: string;
    whatsapp: string;
    whatsappMessage: string;
    or: string;
  };
  footer: string;
  aria: { toggleTheme: string; toggleLang: string };
};

export const dictionaries: Record<Lang, Dict> = {
  en: {
    nav: { about: "About", experience: "Experience", skills: "Skills", certificates: "Certificates", education: "Education", contact: "Contact" },
    hero: { greeting: "Hi, I'm", cta: "Get in touch", downloadCv: "Download CV", available: "Open to new opportunities" },
    sections: {
      about: "About",
      experience: "Experience",
      skills: "Technical skills",
      certificates: "Certificates",
      research: "Research & internships",
      education: "Education",
      contact: "Let's talk",
    },
    experience: { clients: "Clients" },
    certificate: { view: "View certificate", download: "Download PDF", close: "Close" },
    contact: {
      heading: "Let's build something together",
      sub: "Send a message and I'll get back to you soon.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send message",
      sending: "Sending…",
      success: "Thanks! Your message has been sent.",
      error: "Something went wrong. Please try again or email me directly.",
      unavailable: "The form is temporarily unavailable. Please email me directly.",
      invalid: "Please fill in all fields with valid values.",
      tooMany: "Too many attempts. Please try again later.",
      whatsapp: "Message on WhatsApp",
      whatsappMessage: "Hi Yusuf, I saw your portfolio and would like to get in touch.",
      or: "or",
    },
    footer: "Built with Next.js",
    aria: { toggleTheme: "Toggle theme", toggleLang: "Switch language" },
  },
  tr: {
    nav: { about: "Hakkımda", experience: "Deneyim", skills: "Yetenekler", certificates: "Sertifikalar", education: "Eğitim", contact: "İletişim" },
    hero: { greeting: "Merhaba, ben", cta: "İletişime geç", downloadCv: "CV İndir", available: "Yeni fırsatlara açığım" },
    sections: {
      about: "Hakkımda",
      experience: "Deneyim",
      skills: "Teknik yetenekler",
      certificates: "Sertifikalar",
      research: "Araştırma & stajlar",
      education: "Eğitim",
      contact: "Konuşalım",
    },
    experience: { clients: "Müşteriler" },
    certificate: { view: "Sertifikayı gör", download: "PDF indir", close: "Kapat" },
    contact: {
      heading: "Birlikte bir şeyler geliştirelim",
      sub: "Bir mesaj bırak, en kısa sürede dönüş yapayım.",
      name: "Adınız",
      email: "E-posta adresiniz",
      message: "Mesajınız",
      send: "Mesaj gönder",
      sending: "Gönderiliyor…",
      success: "Teşekkürler! Mesajın iletildi.",
      error: "Bir şeyler ters gitti. Lütfen tekrar dene veya doğrudan e-posta gönder.",
      unavailable: "Form şu an kullanılamıyor. Lütfen doğrudan e-posta gönder.",
      invalid: "Lütfen tüm alanları geçerli değerlerle doldur.",
      tooMany: "Çok fazla deneme yapıldı. Lütfen daha sonra tekrar dene.",
      whatsapp: "WhatsApp'tan yaz",
      whatsappMessage: "Merhaba Yusuf, portfolyonu gördüm ve seninle iletişime geçmek istiyorum.",
      or: "veya",
    },
    footer: "Next.js ile geliştirildi",
    aria: { toggleTheme: "Temayı değiştir", toggleLang: "Dili değiştir" },
  },
};
