"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ServerCog,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import {
  type Locale,
  githubHighlights,
  projects,
  skillGroups,
} from "@/data/projects";

const githubUrl = "https://github.com/SamHavocH";
const linkedinUrl =
  "https://www.linkedin.com/in/samuel-ferreira-da-silva-neto-data-engineer";
const email = "mailto:samfersill@gmail.com";
const localeStorageKey = "samuel-fersil-locale";

const badges = [
  "Python",
  "SQL",
  "PySpark",
  "AWS Glue",
  "Athena",
  "S3",
  "QuickSight",
  "Docker",
  "Airflow",
  "dbt",
  "PostgreSQL",
  "Linux",
];

const content = {
  "en-US": {
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      language: "Language",
    },
    hero: {
      eyebrow: "Remote Data Engineer",
      title:
        "Reliable data pipelines. Clear business impact.",
      copy:
        "Python, SQL, PySpark and AWS engineer with corporate-scale experience, business fluency and a portfolio built around the workflows hiring teams actually need: ingestion, orchestration, data quality and reproducible delivery.",
      viewProjects: "Projects",
      contact: "Contact",
      profile: "GitHub profile",
      location: "Brazil, UTC -03:00",
    },
    about: {
      eyebrow: "About",
      title: "Engineering with business context.",
      copy:
        "Samuel Fersil builds reliable data systems with Python, Linux, SQL, PySpark, Docker and AWS. His Administration background and MBA in Data Science & Analytics help him translate business questions into pipelines, data models and operational routines that are clear, testable and useful to decision makers.",
      cards: [
        {
          title: "Enterprise-ready",
          copy:
            "Hands-on exposure to large-scale corporate environments, including Itau Unibanco, with the discipline expected in regulated, high-volume contexts.",
        },
        {
          title: "Built to be operated",
          copy:
            "Projects emphasize retries, observability, validation, documentation and repeatable local execution, not only happy-path demos.",
        },
        {
          title: "International fit",
          copy:
            "Strong fit for remote teams that need clear communication, async ownership and dependable delivery across time zones.",
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Proof through projects.",
      copy:
        "The repositories show end-to-end thinking across lakehouse architecture, API ingestion, orchestration, streaming data quality, Linux productivity and automation. They are organized to make technical review fast.",
      cta: "View repo",
    },
    skills: {
      eyebrow: "Core Stack",
      title: "Tools for reliable delivery.",
    },
    github: {
      eyebrow: "GitHub Highlights",
      title: "Implementation, in public.",
      copy:
        "The profile currently shows 20 public repositories, 12 stars and a focused portfolio around PySpark, Airflow, dbt, Docker, PostgreSQL, Kafka and Linux. It is structured as a technical signal for recruiters, hiring managers and engineering reviewers.",
      cta: "View GitHub profile",
    },
    journey: {
      eyebrow: "Career Narrative",
      title: "Business to data engineering.",
      items: [
        "Started with Administration, building a foundation in process, operations and business context",
        "Completed an MBA in Data Science & Analytics at USP/ESALQ",
        "Gained exposure to corporate-scale environments, including Itau Unibanco",
        "Focused the portfolio on Python, AWS, Linux, PySpark and production-minded data workflows",
        "Now targeting remote international Data Engineer roles where reliability and ownership matter",
      ],
    },
    contact: {
      title: "Need a Data Engineer?",
      copy:
        "I am open to remote international opportunities involving data pipelines, cloud platforms, automation, ETL/ELT, analytics engineering and data quality.",
      email: "Email",
      cv: "Download CV",
    },
    footer: "Samuel Fersil / SamHavocH / Data Engineer",
  },
  "pt-BR": {
    nav: {
      projects: "Projetos",
      skills: "Skills",
      contact: "Contato",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Remote Data Engineer",
      title:
        "Pipelines confiáveis. Impacto claro.",
      copy:
        "Engenheiro com Python, SQL, PySpark e AWS, experiência em escala corporativa, visão de negócio e um portfólio focado no que empresas internacionais procuram: ingestão, orquestração, qualidade de dados e entrega reproduzível.",
      viewProjects: "Projetos",
      contact: "Contato",
      profile: "Perfil no GitHub",
      location: "Brasil, UTC -03:00",
    },
    about: {
      eyebrow: "Sobre",
      title: "Engenharia com contexto de negócio.",
      copy:
        "Samuel Fersil constrói sistemas de dados confiáveis com Python, Linux, SQL, PySpark, Docker e AWS. Sua formação em Administração e MBA em Data Science & Analytics ajudam a transformar perguntas de negócio em pipelines, modelos de dados e rotinas operacionais claras, testáveis e úteis para tomada de decisão.",
      cards: [
        {
          title: "Pronto para enterprise",
          copy:
            "Vivência prática em ambientes corporativos de grande porte, incluindo Itau Unibanco, com a disciplina esperada em contextos regulados e de alto volume.",
        },
        {
          title: "Feito para operar",
          copy:
            "Projetos com foco em retentativas, observabilidade, validação, documentação e execução local repetível, não apenas demos de caminho feliz.",
        },
        {
          title: "Fit internacional",
          copy:
            "Preparado para times remotos que precisam de comunicação clara, ownership assíncrono e entrega confiável entre fusos horários.",
        },
      ],
    },
    projects: {
      eyebrow: "Portfólio",
      title: "Prova em projetos.",
      copy:
        "Os repositórios mostram pensamento ponta a ponta em arquitetura lakehouse, ingestão de APIs, orquestração, qualidade em streaming, produtividade Linux e automação. A estrutura facilita uma revisão técnica rápida.",
      cta: "Ver repo",
    },
    skills: {
      eyebrow: "Stack principal",
      title: "Ferramentas para entregar bem.",
    },
    github: {
      eyebrow: "GitHub Highlights",
      title: "Implementação em público.",
      copy:
        "O perfil mostra atualmente 20 repositórios públicos, 12 stars e um portfólio focado em PySpark, Airflow, dbt, Docker, PostgreSQL, Kafka e Linux. Ele foi organizado como sinal técnico para recrutadores, hiring managers e revisores de engenharia.",
      cta: "Ver perfil no GitHub",
    },
    journey: {
      eyebrow: "Narrativa profissional",
      title: "Do negócio à engenharia.",
      items: [
        "Começou pela Administração, construindo base em processos, operações e contexto de negócio",
        "Concluiu MBA em Data Science & Analytics pela USP/ESALQ",
        "Ganhou vivência em ambientes de escala corporativa, incluindo Itau Unibanco",
        "Direcionou o portfólio para Python, AWS, Linux, PySpark e workflows de dados orientados a produção",
        "Agora busca vagas remotas internacionais de Data Engineer onde confiabilidade e ownership importam",
      ],
    },
    contact: {
      title: "Precisa de um Data Engineer?",
      copy:
        "Aberto a oportunidades remotas internacionais envolvendo pipelines de dados, plataformas cloud, automação, ETL/ELT, analytics engineering e qualidade de dados.",
      email: "Email",
      cv: "Download CV",
    },
    footer: "Samuel Fersil / SamHavocH / Data Engineer",
  },
} satisfies Record<Locale, Record<string, unknown>>;

function getPreferredLocale(): Locale {
  if (typeof window === "undefined") {
    return "en-US";
  }

  const saved = window.localStorage.getItem(localeStorageKey);
  if (saved === "pt-BR" || saved === "en-US") {
    return saved;
  }

  return window.navigator.language.toLowerCase().startsWith("pt")
    ? "pt-BR"
    : "en-US";
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition ${
        variant === "primary"
          ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          : "border border-white/15 bg-white/5 text-slate-100 hover:border-cyan-200/60 hover:bg-white/10"
      }`}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {copy ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{copy}</p>
      ) : null}
    </div>
  );
}

function LanguageToggle({
  locale,
  onChange,
  label,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className="grid grid-cols-2 rounded-md border border-white/10 bg-white/[0.04] p-1 text-xs font-semibold text-slate-300"
    >
      {(["pt-BR", "en-US"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={locale === option}
          onClick={() => onChange(option)}
          className={`min-h-8 rounded px-3 transition ${
            locale === option
              ? "bg-cyan-300 text-slate-950"
              : "hover:bg-white/10 hover:text-white"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function SkillIcon({ icon }: { icon: "data" | "cloud" | "analytics" | "tools" }) {
  if (icon === "cloud") {
    return <Cloud className="size-5" />;
  }

  if (icon === "analytics") {
    return <Database className="size-5" />;
  }

  if (icon === "tools") {
    return <Terminal className="size-5" />;
  }

  return <ServerCog className="size-5" />;
}

function ScrollRevealSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className: string;
  id: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const maxProgressRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    let frame = 0;

    function updateProgress() {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const start = viewportHeight * 0.92;
        const end = viewportHeight * 0.42;
        const nextProgress = Math.min(
          1,
          Math.max(0, (start - rect.top) / (start - end)),
        );

        maxProgressRef.current = Math.max(maxProgressRef.current, nextProgress);
        setProgress(maxProgressRef.current);
      });
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const easedProgress = 1 - Math.pow(1 - progress, 3);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      style={{
        opacity: easedProgress,
        transform: `translateY(${(1 - easedProgress) * 30}px)`,
        filter: `blur(${(1 - easedProgress) * 8}px)`,
      }}
    >
      {children}
    </section>
  );
}

function MotionBlurVeil() {
  const veilRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const currentOpacityRef = useRef(0);
  const targetOpacityRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    lastScrollYRef.current = window.scrollY;

    function renderFrame() {
      const veil = veilRef.current;
      if (!veil) {
        return;
      }

      const nextOpacity =
        currentOpacityRef.current +
        (targetOpacityRef.current - currentOpacityRef.current) * 0.22;

      currentOpacityRef.current = nextOpacity;
      targetOpacityRef.current *= 0.965;
      veil.style.opacity = nextOpacity.toFixed(3);

      if (nextOpacity > 0.004 || targetOpacityRef.current > 0.004) {
        frameRef.current = window.requestAnimationFrame(renderFrame);
      } else {
        currentOpacityRef.current = 0;
        targetOpacityRef.current = 0;
        veil.style.opacity = "0";
        frameRef.current = null;
      }
    }

    function startRenderLoop() {
      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(renderFrame);
      }
    }

    function handleScroll() {
      const nextScrollY = window.scrollY;
      const distance = Math.abs(nextScrollY - lastScrollYRef.current);
      lastScrollYRef.current = nextScrollY;

      targetOpacityRef.current = Math.min(
        1,
        Math.max(targetOpacityRef.current, 0.42 + distance / 42),
      );

      startRenderLoop();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const farMask =
    "linear-gradient(to top, rgba(0,0,0,0.68), rgba(0,0,0,0.34) 38%, rgba(0,0,0,0.1) 72%, transparent 100%)";
  const midMask =
    "linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.52) 48%, rgba(0,0,0,0.14) 82%, transparent 100%)";
  const nearMask =
    "linear-gradient(to top, black, rgba(0,0,0,0.9) 42%, rgba(0,0,0,0.36) 76%, transparent 100%)";

  return (
    <div
      ref={veilRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-[56vh] overflow-hidden opacity-0 will-change-opacity md:h-[62vh]"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-full bg-slate-950/[0.09] backdrop-blur-[3px]"
        style={{
          maskImage: farMask,
          WebkitMaskImage: farMask,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[76%] bg-slate-950/[0.16] backdrop-blur-lg"
        style={{
          maskImage: midMask,
          WebkitMaskImage: midMask,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[48%] bg-slate-950/[0.28] backdrop-blur-3xl"
        style={{
          maskImage: nearMask,
          WebkitMaskImage: nearMask,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-slate-950/48 via-slate-950/16 to-transparent" />
    </div>
  );
}

export default function Portfolio({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = content[locale];

  useEffect(() => {
    const preferredLocale = getPreferredLocale() || initialLocale;
    setLocale(preferredLocale);
    document.documentElement.lang = preferredLocale;
  }, [initialLocale]);

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem(localeStorageKey, nextLocale);
    document.cookie = `${localeStorageKey}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
  }

  return (
    <main className="overflow-hidden">
      <MotionBlurVeil />
      <header className="section pb-10 pt-6">
        <nav className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
              <a className="hover:text-white" href="#projects">
                {t.nav.projects}
              </a>
              <a className="hover:text-white" href="#skills">
                {t.nav.skills}
              </a>
              <a className="hover:text-white" href="#contact">
                {t.nav.contact}
              </a>
            </div>
            <LanguageToggle
              locale={locale}
              onChange={changeLocale}
              label={t.nav.language}
            />
          </div>
        </nav>

        <section className="grid items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16 lg:gap-16">
          <div className="fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
              <Sparkles className="size-4" />
              {t.hero.eyebrow}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t.hero.copy}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects">
                {t.hero.viewProjects} <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href={githubUrl} variant="secondary">
                <Github className="size-4" /> GitHub
              </ButtonLink>
              <ButtonLink href={linkedinUrl} variant="secondary">
                <Linkedin className="size-4" /> LinkedIn
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                <Mail className="size-4" /> {t.hero.contact}
              </ButtonLink>
            </div>
          </div>

          <div className="glass fade-in relative rounded-lg p-5">
            <div className="flex items-start gap-5">
              <Image
                src="https://github.com/SamHavocH.png"
                alt="Samuel Fersil"
                width={128}
                height={128}
                className="size-24 rounded-md border border-white/15 object-cover md:size-32"
              />
              <div className="min-w-0">
                <p className="text-sm text-slate-400">{t.hero.profile}</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  SamHavocH
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                  <MapPin className="size-4 text-cyan-200" /> {t.hero.location}
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {githubHighlights.map((item) => (
                <div
                  key={item.label["en-US"]}
                  className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                    {item.label[locale]}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-cyan-200/15 bg-cyan-200/[0.08] px-3 py-1 text-xs text-cyan-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>
      </header>

      <ScrollRevealSection className="section py-16" id="about">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          copy={t.about.copy}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {t.about.cards.map((card) => (
            <article key={card.title} className="glass rounded-lg p-6">
              <CheckCircle2 className="mb-5 size-6 text-cyan-200" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{card.copy}</p>
            </article>
          ))}
        </div>
      </ScrollRevealSection>

      <section className="section py-16" id="projects">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          copy={t.projects.copy}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="glass group rounded-lg p-6 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {project.description[locale]}
                  </p>
                </div>
                <Code2 className="size-6 shrink-0 text-cyan-200" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.08] px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight["en-US"]} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-200" />
                    {highlight[locale]}
                  </li>
                ))}
              </ul>
              <a
                href={project.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition group-hover:text-cyan-200"
              >
                {t.projects.cta} <ExternalLink className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section py-16" id="skills">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.category["en-US"]} className="glass rounded-lg p-6">
              <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-100">
                <SkillIcon icon={group.icon} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {group.category[locale]}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={t.github.eyebrow}
              title={t.github.title}
              copy={t.github.copy}
            />
            <ButtonLink href={githubUrl} variant="secondary">
              <Github className="size-4" /> {t.github.cta}
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {githubHighlights.map((item) => (
              <article key={item.label["en-US"]} className="glass rounded-lg p-6">
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">
                  {item.label[locale]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16">
        <SectionHeading
          eyebrow={t.journey.eyebrow}
          title={t.journey.title}
        />
        <ol className="relative space-y-5 border-l border-cyan-200/20 pl-6">
          {t.journey.items.map((item) => (
            <li key={item} className="relative">
              <span className="absolute -left-[31px] top-1 flex size-3 rounded-full bg-cyan-200 shadow-glow" />
              <p className="glass rounded-lg p-5 text-slate-200">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section py-16" id="contact">
        <div className="glass rounded-lg p-8 md:p-10">
          <BriefcaseBusiness className="mb-6 size-8 text-cyan-200" />
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {t.contact.copy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={githubUrl} variant="secondary">
              <Github className="size-4" /> GitHub
            </ButtonLink>
            <ButtonLink href={linkedinUrl} variant="secondary">
              <Linkedin className="size-4" /> LinkedIn
            </ButtonLink>
            <ButtonLink href={email} variant="secondary">
              <Mail className="size-4" /> {t.contact.email}
            </ButtonLink>
            <span className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-slate-500">
              <Download className="size-4" /> {t.contact.cv}
            </span>
          </div>
        </div>
      </section>

      <footer className="section flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>{t.footer}</p>
        <a className="inline-flex items-center gap-2 hover:text-white" href={githubUrl}>
          <Github className="size-4" /> GitHub
        </a>
      </footer>
    </main>
  );
}
