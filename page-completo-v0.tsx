"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

export default function LZMachado() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = language === "pt" ? contentPt : contentEn;

  return (
    <div className="w-full bg-white">
      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-fraunces text-2xl font-bold" style={{ color: "#1F4F3D" }}>
            LZ MACHADO
          </div>
          <div className="hidden md:text-xs md:flex md:flex-col items-end">
            <span style={{ color: "#5D3F7E" }}>Ops & Estratégia</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#work" className="text-sm hover:opacity-70 transition">
              {t.nav.work}
            </a>
            <a href="#help" className="text-sm hover:opacity-70 transition">
              {t.nav.help}
            </a>
            <a href="#about" className="text-sm hover:opacity-70 transition">
              {t.nav.about}
            </a>
            <a href="#thinking" className="text-sm hover:opacity-70 transition">
              {t.nav.thinking}
            </a>
            <a href="#contact" className="text-sm hover:opacity-70 transition">
              {t.nav.contact}
            </a>
            <div className="flex gap-2 ml-4 pl-4 border-l border-gray-200">
              <button
                onClick={() => setLanguage("pt")}
                className={`text-xs font-medium ${language === "pt" ? "opacity-100" : "opacity-50"}`}
              >
                PT
              </button>
              <span className="text-xs opacity-30">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-medium ${language === "en" ? "opacity-100" : "opacity-50"}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex gap-4 items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("pt")}
                className={`text-xs font-medium ${language === "pt" ? "opacity-100" : "opacity-50"}`}
              >
                PT
              </button>
              <span className="text-xs opacity-30">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-medium ${language === "en" ? "opacity-100" : "opacity-50"}`}
              >
                EN
              </button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <a href="#work" className="block text-sm">
              {t.nav.work}
            </a>
            <a href="#help" className="block text-sm">
              {t.nav.help}
            </a>
            <a href="#about" className="block text-sm">
              {t.nav.about}
            </a>
            <a href="#thinking" className="block text-sm">
              {t.nav.thinking}
            </a>
            <a href="#contact" className="block text-sm">
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs md:text-sm font-medium mb-6" style={{ color: "#5D3F7E" }}>
            {t.hero.name}
          </p>
          <h1 className="font-fraunces text-6xl md:text-8xl font-bold mb-6 leading-tight" style={{ color: "#1F4F3D" }}>
            {t.hero.tagline}
          </h1>
          <p className="text-lg md:text-xl mb-12" style={{ color: "#5A5A5A" }}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 font-medium text-white text-sm rounded hover:opacity-90 transition" style={{ backgroundColor: "#1F4F3D" }}>
              {t.hero.cta1}
            </button>
            <button className="px-8 py-3 font-medium text-sm rounded hover:opacity-70 transition border border-gray-300" style={{ color: "#1F4F3D" }}>
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg md:text-xl mb-8 leading-relaxed font-medium" style={{ color: "#5D3F7E" }}>
            {t.intro.text1}
          </p>
          <p className="text-base md:text-lg mb-8" style={{ color: "#5A5A5A", lineHeight: "1.8" }}>
            {t.intro.text2}
          </p>
          <Link href="https://www.linkedin.com/in/laizamachado/" target="_blank" className="text-sm font-medium hover:opacity-70 transition" style={{ color: "#1F4F3D" }}>
            {t.intro.linkedinLink}
          </Link>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-2" style={{ color: "#1F4F3D" }}>
            {language === "pt" ? "Onde eu já atuei" : "Where I've worked"}
          </h2>
          <p className="text-lg md:text-xl mb-12 md:mb-16" style={{ color: "#5A5A5A" }}>
            {language === "pt" ? "Uma carreira em diferentes contextos." : "A career across different contexts."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {["Ford", "Fiserv", "Kestraa", "Embraer", "Balbino Pires"].map((company, idx) => (
              <div key={idx} className="flex items-center justify-center h-24 md:h-32 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white transition">
                <span className="text-sm md:text-base font-medium text-center px-2" style={{ color: "#5A5A5A" }}>
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: "#5D3F7E" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fraunces text-5xl md:text-6xl font-bold mb-12 text-white leading-tight">
            {t.methodology.title}
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-90 mb-16 max-w-2xl leading-relaxed">
            {t.methodology.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            {t.methodology.verbs.map((verb, idx) => (
              <div key={idx} className="text-2xl md:text-3xl font-bold text-white opacity-60">
                {verb}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="help" className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1F4F3D" }}>
            {t.services.title}
          </h2>
          <p className="text-base md:text-lg mb-16" style={{ color: "#5A5A5A" }}>
            {t.services.intro}
          </p>

          <div className="space-y-16">
            {t.services.areas.map((area, idx) => (
              <div key={idx} className="pb-16 border-b border-gray-200">
                <div className="flex gap-4 mb-6">
                  <span className="text-2xl font-bold" style={{ color: "#D4E8A0" }}>
                    {area.number}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 font-fraunces" style={{ color: "#1F4F3D" }}>
                      {area.title}
                    </h3>
                    <p className="text-base" style={{ color: "#5D3F7E" }}>
                      {area.description}
                    </p>
                  </div>
                </div>
                <p className="text-base mb-6" style={{ color: "#5A5A5A", lineHeight: "1.8" }}>
                  {area.details}
                </p>
                <p className="text-sm" style={{ color: "#999" }}>
                  {area.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: "#D4A5D4", backgroundOpacity: 0.2 }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="font-fraunces text-3xl md:text-4xl font-bold mb-8" style={{ color: "#1F4F3D" }}>
            {t.skills.title}
          </h3>
          <p className="text-base md:text-lg" style={{ color: "#5D3F7E" }}>
            {t.skills.list}
          </p>
        </div>
      </section>

      {/* WORK TOGETHER */}
      <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: "#D4A5D4" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fraunces text-5xl md:text-6xl font-bold mb-6" style={{ color: "white" }}>
            {t.workTogether.title}
          </h2>
          <p className="text-lg md:text-xl mb-16 text-white text-opacity-90">
            {t.workTogether.intro}
          </p>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {t.workTogether.options.map((opt, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-3 text-white font-fraunces">
                  {opt.name}
                </h3>
                <p className="text-base text-white text-opacity-90">
                  {opt.description}
                </p>
              </div>
            ))}
          </div>

          <button className="text-lg font-medium text-white hover:opacity-80 transition">
            {t.workTogether.cta}
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-12 md:mb-16" style={{ color: "#1F4F3D" }}>
            {t.about.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative w-full max-w-sm h-96 md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                  [Adicione sua foto em /public/laiza.jpg]
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              {t.about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "#5A5A5A" }}>
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-6 mt-8 md:mt-12">
                {t.about.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-sm md:text-base transition hover:opacity-70"
                    style={{ color: "#1F4F3D" }}
                  >
                    {link.name}
                    <ExternalLink size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THINKING */}
      <section id="thinking" className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: "#F9F7F4" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fraunces text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1F4F3D" }}>
            {t.thinking.title}
          </h2>
          <p className="text-sm md:text-base mb-6" style={{ color: "#5D3F7E" }}>
            {t.thinking.subtitle}
          </p>
          <p className="text-base mb-8" style={{ color: "#5A5A5A" }}>
            {t.thinking.description}
          </p>
          <div className="flex gap-6">
            {t.thinking.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-medium hover:opacity-70 transition"
                style={{ color: "#5D3F7E" }}
              >
                {link.name}
                <ExternalLink size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: "#1F4F3D" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-fraunces text-5xl md:text-6xl font-bold mb-6 text-white">
            {t.contact.question}
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-12 text-white opacity-90 font-fraunces">
            {t.contact.statement}
          </p>
          <div className="space-y-4">
            <Link href={`mailto:${t.contact.email}`} className="block text-xl font-medium text-white hover:opacity-80 transition">
              {t.contact.email}
            </Link>
            <Link href={`tel:${t.contact.phone}`} className="block text-xl font-medium text-white hover:opacity-80 transition">
              {t.contact.phone}
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs opacity-60">
          <div>LZ MACHADO</div>
          <div>{language === "pt" ? "© 2024" : "© 2024"}</div>
        </div>
      </footer>
    </div>
  );
}

// CONTEÚDO PT
const contentPt = {
  nav: {
    work: "Trabalho",
    help: "Como posso ajudar",
    about: "Sobre",
    thinking: "Thinking",
    contact: "Contato",
  },
  hero: {
    name: "LZ MACHADO",
    tagline: "Eu gosto de resolver problemas.",
    subtitle: "Estratégia · Operações · Projetos · Processos",
    cta1: "Conheça meu trabalho",
    cta2: "Vamos conversar",
  },
  intro: {
    text1: "Ao longo da minha carreira, os problemas mudaram. O jeito de trabalhar com eles, não.",
    text2: "Já trabalhei em diferentes contextos — indústria, tecnologia, startups, operações, procurement, produto e projetos — sempre entre estratégia e execução.",
    linkedinLink: "Ver LinkedIn →",
  },
  methodology: {
    title: "Entender. Estruturar. Fazer.",
    text: "Problemas diferentes pedem trabalhos diferentes. Eu entro para entender o que está acontecendo, estruturar o que precisa ser organizado e ajudar a fazer as coisas avançarem.",
    verbs: ["ENTENDER", "ESTRUTURAR", "FAZER"],
  },
  services: {
    title: "Como posso ajudar",
    intro: "Trabalho com problemas específicos, e o formato do trabalho depende do que precisa ser resolvido.",
    areas: [
      {
        number: "01",
        verb: "ENTENDER",
        title: "Diagnóstico & Viabilidade",
        description: "Quando o problema ainda precisa ser entendido.",
        details: "Diagnóstico de negócios e organizações, análise de processos, identificação de gargalos, análise de viabilidade e estruturação de informações para tomada de decisão.",
        examples: "Diagnóstico organizacional · Análise de negócio · Análise de viabilidade · Plano de ação",
      },
      {
        number: "02",
        verb: "ESTRUTURAR",
        title: "Processos, Operações & Projetos",
        description: "Quando sabemos o que precisa ser feito, mas é preciso criar a estrutura para fazer acontecer.",
        details: "Mapeamento e redesenho de processos, estruturação de operações, planejamento e governança de projetos, definição de responsabilidades, fluxos, indicadores e rotinas.",
        examples: "Estruturação de processos · Desenho operacional · Estruturação de projetos · Governança · Planejamento",
      },
      {
        number: "03",
        verb: "FAZER",
        title: "Implementação, Gestão & Capacitação",
        description: "Quando o desafio é colocar a mudança para funcionar.",
        details: "Coordenação de iniciativas, acompanhamento da implementação, organização de rotinas, alinhamento entre equipes e stakeholders, facilitação e capacitação.",
        examples: "Gestão de projetos · Implementação · Workshops · Treinamentos · Facilitação",
      },
    ],
  },
  skills: {
    title: "Áreas que atravessam meu trabalho",
    list: "Estratégia · Business Analysis · Operações · Processos · Projetos · Produto · Procurement · Negociação · Governança · Finanças",
  },
  workTogether: {
    title: "Vamos trabalhar juntos.",
    intro: "Três formas de começar — sem pacotes rígidos.",
    options: [
      {
        name: "Projeto",
        description: "Para um problema específico ou uma entrega definida.",
      },
      {
        name: "Consultoria / acompanhamento",
        description: "Para problemas que precisam de acompanhamento ao longo do tempo.",
      },
      {
        name: "Workshops & capacitação",
        description: "Para equipes que precisam desenvolver conhecimento, método e autonomia.",
      },
    ],
    cta: "Vamos conversar →",
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Sou administradora com mais de 10 anos de experiência. Especialista em Administração de Negócios pela USP, cursando Mestrado em Administração na UFBA, com formação também em Filosofia.",
      "Gosto de coisas complicadas. Sou curiosa. Sou prática. Não tenho medo de descobrir o que ainda não sei.",
      "Minha formação e experiência atravessam Administração, Tecnologia, Estratégia, Operações, Projetos e Pesquisa.",
      "Hoje atuo de forma independente, ajudando organizações e empreendedoras a fazer sentido de situações complicadas e transformar esse entendimento em resultados concretos.",
    ],
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/laizamachado/" },
      { name: "Lattes", url: "http://lattes.cnpq.br/3970820047744566" },
      { name: "Substack", url: "https://substack.com/@laizamachado" },
    ],
  },
  thinking: {
    title: "Thinking",
    subtitle: "Research & Writing",
    description: "Escrevo, pesquiso e estudo questões sobre organizações, trabalho, capital, gestão e sociedade.",
    links: [
      { name: "Substack", url: "https://substack.com/@laizamachado" },
      { name: "Lattes", url: "http://lattes.cnpq.br/3970820047744566" },
    ],
  },
  contact: {
    question: "Tem um problema na sua mesa?",
    statement: "Vamos conversar.",
    email: "oi@laizamachado.com",
    phone: "+55 11 975672572",
    whatsappUrl: "https://wa.me/5511975672572",
  },
};

// CONTEÚDO EN
const contentEn = {
  nav: {
    work: "Work",
    help: "How I can help",
    about: "About",
    thinking: "Thinking",
    contact: "Contact",
  },
  hero: {
    name: "LZ MACHADO",
    tagline: "I like solving problems.",
    subtitle: "Strategy · Operations · Projects · Processes",
    cta1: "Explore my work",
    cta2: "Let's talk",
  },
  intro: {
    text1: "Throughout my career, problems have changed. How I work with them hasn't.",
    text2: "I've worked across different contexts — industry, technology, startups, operations, procurement, product and projects — always between strategy and execution.",
    linkedinLink: "View LinkedIn →",
  },
  methodology: {
    title: "Understand. Structure. Execute.",
    text: "Different problems require different work. I come in to understand what's happening, structure what needs to be organized, and help things move forward.",
    verbs: ["UNDERSTAND", "STRUCTURE", "EXECUTE"],
  },
  services: {
    title: "How I can help",
    intro: "I work with specific problems, and the format of work depends on what needs to be solved.",
    areas: [
      {
        number: "01",
        verb: "UNDERSTAND",
        title: "Diagnosis & Feasibility",
        description: "When the problem still needs to be understood.",
        details: "Business and organizational diagnosis, process analysis, bottleneck identification, feasibility analysis and structuring information for decision-making.",
        examples: "Organizational diagnosis · Business analysis · Feasibility analysis · Action plan",
      },
      {
        number: "02",
        verb: "STRUCTURE",
        title: "Processes, Operations & Projects",
        description: "When we know what needs to be done, but need to create the structure to make it happen.",
        details: "Process mapping and redesign, operations structuring, project planning and governance, definition of responsibilities, workflows, indicators and routines.",
        examples: "Process structuring · Operational design · Project structuring · Governance · Planning",
      },
      {
        number: "03",
        verb: "EXECUTE",
        title: "Implementation, Management & Enablement",
        description: "When the challenge is making change work.",
        details: "Initiative coordination, implementation tracking, routine organization, alignment across teams and stakeholders, facilitation and enablement.",
        examples: "Project management · Implementation · Workshops · Training · Facilitation",
      },
    ],
  },
  skills: {
    title: "Areas that cross my work",
    list: "Strategy · Business Analysis · Operations · Processes · Projects · Product · Procurement · Negotiation · Governance · Finance",
  },
  workTogether: {
    title: "Let's work together.",
    intro: "Three ways to start — no rigid packages.",
    options: [
      {
        name: "Project",
        description: "For a specific problem or defined deliverable.",
      },
      {
        name: "Consulting / ongoing support",
        description: "For problems that need support over time.",
      },
      {
        name: "Workshops & enablement",
        description: "For teams that need to develop knowledge, method and autonomy.",
      },
    ],
    cta: "Let's talk →",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm an administrator with more than 10 years of experience. Specialist in Business Administration from USP, pursuing a Master's in Administration at UFBA, with background in Philosophy.",
      "I like complex things. I'm curious. I'm practical. I'm not afraid to figure out what I don't yet know.",
      "My background and experience span Administration, Technology, Strategy, Operations, Projects and Research.",
      "Today I work independently, helping organizations and entrepreneurs make sense of complex situations and transform that understanding into concrete results.",
    ],
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/laizamachado/" },
      { name: "Lattes", url: "http://lattes.cnpq.br/3970820047744566" },
      { name: "Substack", url: "https://substack.com/@laizamachado" },
    ],
  },
  thinking: {
    title: "Thinking",
    subtitle: "Research & Writing",
    description: "I write, research and study questions about organizations, work, capital, management and society.",
    links: [
      { name: "Substack", url: "https://substack.com/@laizamachado" },
      { name: "Lattes", url: "http://lattes.cnpq.br/3970820047744566" },
    ],
  },
  contact: {
    question: "Have a problem on your desk?",
    statement: "Let's talk.",
    email: "oi@laizamachado.com",
    phone: "+55 11 975672572",
    whatsappUrl: "https://wa.me/5511975672572",
  },
};
