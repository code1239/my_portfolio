import type { Lang } from "./types";

export const profile = {
  name: "Yusuf Macit",
  email: "yusufmacit.dev@gmail.com",
  phone: "+90 534 732 80 34",
  phoneIntl: "905347328034",
  linkedin: "https://linkedin.com/in/yusuf-macit-582091194",
  github: "https://github.com/code1239",
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  clients?: string[];
  bullets: string[];
};

export type Resume = {
  title: string;
  location: string;
  summary: string;
  stats: { value: string; label: string }[];
  experience: ExperienceItem[];
  skills: { group: string; items: string[] }[];
  research: { org: string; role: string; period: string; bullets: string[] }[];
  education: { school: string; degree: string; period: string };
  certificate: { title: string; issuer: string; detail: string; date: string };
};

export const resume: Record<Lang, Resume> = {
  en: {
    title: "Computer Engineer · Conversational AI & Backend Developer",
    location: "İstanbul, Türkiye",
    summary:
      "Computer Engineer with 4+ years of experience building conversational AI and backend systems. Designs LLM-powered chatbots and AI agents end to end, from requirements analysis and prompt engineering to API development and deployment, and has delivered production solutions for enterprise clients including Ford, Vakko and Garanti Filo.",
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "8", label: "Enterprise clients served" },
      { value: "LLM", label: "Chatbots & AI agents in production" },
    ],
    experience: [
      {
        company: "CBOT",
        role: "Conversational AI Designer",
        period: "Dec 2024 – Jun 2026",
        clients: ["Ford", "Vakko", "Avrasya Tüneli", "RTÜK", "Evidea", "Garanti Filo", "Metropolcard", "Pluxee"],
        bullets: [
          "Designed and delivered LLM-powered chatbots and AI agents for task automation across 8 enterprise clients, with a focus on conversational UX and reliable user interactions.",
          "Improved LLM response quality and task adherence through systematic prompt engineering.",
          "Built proof-of-concept solutions that demonstrated AI capabilities and accelerated client decision-making.",
          "Translated business and customer requirements into clear technical specifications for the engineering team.",
          "Helped clients configure and operate solutions on the company's AI design and chatbot management platform; reported monthly delivery progress directly to clients.",
        ],
      },
      {
        company: "ZACK Ai",
        role: "Backend Developer",
        period: "Nov 2021 – Jul 2024",
        bullets: [
          "Led the team that built a production WhatsApp chatbot end to end.",
          "Developed full-stack web applications with Django, including backend logic and relational database design for multiple applications.",
          "Built and tested REST APIs with FastAPI.",
          "Deployed and maintained applications in Linux environments.",
        ],
      },
    ],
    skills: [
      { group: "AI & LLM", items: ["LLM Applications", "AI Agents", "Prompt Engineering", "Conversational AI & Chatbot Design"] },
      { group: "Backend", items: ["Python", "Django", "FastAPI", "REST APIs", "Relational Database Design"] },
      { group: "Infrastructure", items: ["Linux", "Application Deployment & Maintenance"] },
      { group: "Delivery", items: ["Requirements Analysis", "Technical Specifications", "PoC Development", "Client Communication"] },
    ],
    research: [
      {
        org: "Istanbul Bilgi University",
        role: "Undergraduate Research Assistant",
        period: "Jun 2021 – Jul 2021",
        bullets: ["Built and cleaned Turkish-language datasets for training and testing image recognition models in a BAP-funded research project."],
      },
      {
        org: "Pfizer",
        role: "Business Technology Intern (Part-Time)",
        period: "Jul 2019 – Aug 2019",
        bullets: ["Researched AI applications in healthcare and helped the BT Turkey lead evaluate emerging technology tools; presented findings weekly."],
      },
    ],
    education: {
      school: "Istanbul Bilgi University",
      degree: "B.Sc. in Computer Engineering",
      period: "Oct 2016 – Aug 2021",
    },
    certificate: {
      title: "Fundamentals of Agents",
      issuer: "Hugging Face",
      detail: "Completed Unit 1: Foundations of Agents in the Hugging Face Agents Course.",
      date: "Sep 30, 2026",
    },
  },
  tr: {
    title: "Bilgisayar Mühendisi · Konuşmaya Dayalı Yapay Zekâ & Backend Geliştirici",
    location: "İstanbul, Türkiye",
    summary:
      "Konuşmaya dayalı yapay zekâ ve backend sistemleri geliştirme alanında 4+ yıllık deneyime sahip Bilgisayar Mühendisi. LLM tabanlı chatbot'ları ve yapay zekâ ajanlarını gereksinim analizi ve prompt mühendisliğinden API geliştirme ve devreye almaya kadar uçtan uca tasarlıyor; Ford, Vakko ve Garanti Filo dahil kurumsal müşteriler için canlı ortamda çalışan çözümler teslim etti.",
    stats: [
      { value: "4+", label: "Yıllık deneyim" },
      { value: "8", label: "Hizmet verilen kurumsal müşteri" },
      { value: "LLM", label: "Canlıda chatbot ve yapay zekâ ajanları" },
    ],
    experience: [
      {
        company: "CBOT",
        role: "Konuşmaya Dayalı Yapay Zekâ Tasarımcısı",
        period: "Ara 2024 – Haz 2026",
        clients: ["Ford", "Vakko", "Avrasya Tüneli", "RTÜK", "Evidea", "Garanti Filo", "Metropolcard", "Pluxee"],
        bullets: [
          "8 kurumsal müşteri için görev otomasyonuna yönelik LLM tabanlı chatbot'lar ve yapay zekâ ajanları tasarlayıp teslim etti; konuşma deneyimine ve güvenilir kullanıcı etkileşimlerine odaklandı.",
          "Sistematik prompt mühendisliği ile LLM yanıt kalitesini ve göreve bağlılığı iyileştirdi.",
          "Yapay zekâ yeteneklerini gösteren ve müşterilerin karar almasını hızlandıran PoC çözümleri geliştirdi.",
          "İş ve müşteri gereksinimlerini mühendislik ekibi için net teknik şartnamelere dönüştürdü.",
          "Müşterilerin şirketin yapay zekâ tasarım ve chatbot yönetim platformunda çözümleri yapılandırmasına ve işletmesine yardımcı oldu; aylık teslimat ilerlemesini doğrudan müşterilere raporladı.",
        ],
      },
      {
        company: "ZACK Ai",
        role: "Backend Geliştirici",
        period: "Kas 2021 – Tem 2024",
        bullets: [
          "Canlı ortamda çalışan bir WhatsApp chatbot'unu uçtan uca geliştiren ekibe liderlik etti.",
          "Django ile birden fazla uygulama için backend mantığı ve ilişkisel veritabanı tasarımı dahil full-stack web uygulamaları geliştirdi.",
          "FastAPI ile REST API'ler geliştirdi ve test etti.",
          "Uygulamaları Linux ortamlarında yayına aldı ve bakımını yaptı.",
        ],
      },
    ],
    skills: [
      { group: "Yapay Zekâ & LLM", items: ["LLM Uygulamaları", "Yapay Zekâ Ajanları", "Prompt Mühendisliği", "Konuşmaya Dayalı YZ & Chatbot Tasarımı"] },
      { group: "Backend", items: ["Python", "Django", "FastAPI", "REST API", "İlişkisel Veritabanı Tasarımı"] },
      { group: "Altyapı", items: ["Linux", "Uygulama Yayına Alma & Bakım"] },
      { group: "Teslimat", items: ["Gereksinim Analizi", "Teknik Şartname", "PoC Geliştirme", "Müşteri İletişimi"] },
    ],
    research: [
      {
        org: "İstanbul Bilgi Üniversitesi",
        role: "Lisans Araştırma Asistanı",
        period: "Haz 2021 – Tem 2021",
        bullets: ["BAP destekli bir araştırma projesinde görüntü tanıma modellerinin eğitimi ve testi için Türkçe veri setleri oluşturdu ve temizledi."],
      },
      {
        org: "Pfizer",
        role: "Business Technology Stajyeri (Yarı Zamanlı)",
        period: "Tem 2019 – Ağu 2019",
        bullets: ["Sağlık alanında yapay zekâ uygulamalarını araştırdı, BT Türkiye liderinin yeni teknoloji araçlarını değerlendirmesine yardımcı oldu; bulguları haftalık olarak sundu."],
      },
    ],
    education: {
      school: "İstanbul Bilgi Üniversitesi",
      degree: "Bilgisayar Mühendisliği, Lisans",
      period: "Eki 2016 – Ağu 2021",
    },
    certificate: {
      title: "Ajanların Temelleri (Fundamentals of Agents)",
      issuer: "Hugging Face",
      detail: "Hugging Face Agents Course kapsamında Unit 1: Foundations of Agents bölümünü başarıyla tamamladı.",
      date: "30 Eyl 2026",
    },
  },
};
