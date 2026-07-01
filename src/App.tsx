import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Github, Linkedin, Mail, MapPin, Phone, Download, ArrowRight,
  Code2, Brain, Wrench, Globe, Sparkles, Trophy, GraduationCap, Briefcase,
  ArrowUp, Menu, X, Send, CheckCircle2, AlertCircle, Loader2, Cpu, Cloud,
  Database, MessageCircle, ShieldCheck, Mic, Network, Activity, BarChart3,
} from "lucide-react";
import {
  SiPython, SiHtml5, SiCss, SiAngular, SiGithub, SiStreamlit, SiJupyter,
  SiNodedotjs, SiMongodb,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

import portraitJpg from "@/assets/lasya-portrait.jpg";
import portraitWebp from "@/assets/lasya-portrait.webp";
import resumePdf from "@/assets/Lasya_Mahankali_Resume.pdf";

const portrait = portraitJpg;
const resumeUrl = resumePdf;
const RESUME_FILENAME = "Lasya_Mahankali_Resume.pdf";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "Computer Science Engineer",
  "AI/ML Enthusiast",
  "Aspiring Software Developer",
  "Problem Solver",
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function smoothScroll(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-black focus:font-semibold">
        Skip to main content
      </a>
      <RevealStyles />
      <BackgroundFX />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function RevealStyles() {
  return (
    <style>{`
      [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1);}
      [data-reveal].revealed{opacity:1;transform:none;}
      [data-reveal-delay="1"]{transition-delay:.08s}
      [data-reveal-delay="2"]{transition-delay:.16s}
      [data-reveal-delay="3"]{transition-delay:.24s}
      [data-reveal-delay="4"]{transition-delay:.32s}
      [data-reveal-delay="5"]{transition-delay:.4s}
      .tilt-card{transition:transform .5s cubic-bezier(.2,.7,.2,1), box-shadow .5s ease, border-color .5s ease;}
      .tilt-card:hover{transform:translateY(-6px) rotateX(2deg) rotateY(-2deg);border-color:rgba(139,92,246,.45);box-shadow:0 30px 80px -30px rgba(59,130,246,.45);}
      .role-cycle{display:inline-block;background:linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4);-webkit-background-clip:text;background-clip:text;color:transparent;}
      a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid #8B5CF6;outline-offset:3px;border-radius:6px;}
      @media (prefers-reduced-motion: reduce){
        *,*::before,*::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important;scroll-behavior:auto !important;}
        [data-reveal]{opacity:1 !important;transform:none !important;}
      }
    `}</style>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(1200px 600px at 80% -10%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(700px 400px at 50% 110%, rgba(6,182,212,0.12), transparent 60%)" }} />
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,15,25,0) 0%, rgba(11,15,25,0.6) 60%, #0B0F19 100%)" }} />
      <Particles />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0">
      {dots.map((_, i) => {
        const size = 2 + ((i * 7) % 5);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 8) * 0.6;
        const dur = 6 + (i % 5);
        const color = i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#8B5CF6" : "#06B6D4";
        return (
          <span
            key={i}
            className="absolute rounded-full animate-float-slow"
            style={{
              width: size, height: size, left: `${left}%`, top: `${top}%`,
              background: color, boxShadow: `0 0 12px ${color}`,
              opacity: 0.5, animationDelay: `${delay}s`, animationDuration: `${dur}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong border-b border-white/10" : "bg-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => smoothScroll("home")} aria-label="Go to home" className="group flex items-center gap-2">
          <span className="grid place-items-center h-9 w-9 rounded-lg font-display font-bold text-white animated-gradient" style={{ backgroundImage: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }}>LM</span>
          <span className="font-display font-semibold text-sm tracking-wide text-white/80 group-hover:text-white">Lasya Mahankali</span>
        </button>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.id}>
              <button onClick={() => smoothScroll(n.id)} aria-label={`Navigate to ${n.label} section`} className="px-3 py-2 text-sm text-white/80 hover:text-white transition relative group">
                {n.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform" style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4)" }} />
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <button onClick={() => smoothScroll("contact")} aria-label="Let's connect — go to contact section" className="px-4 py-2 rounded-lg text-sm font-medium text-white glass hover:bg-white/10 hover:scale-[1.03] transition">
            Let's Connect
          </button>
        </div>
        <button className="lg:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="lg:hidden glass-strong border-t border-white/10">
          <ul className="px-5 py-4 space-y-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => { smoothScroll(n.id); setOpen(false); }} aria-label={`Navigate to ${n.label} section`} className="w-full text-left px-3 py-2 rounded-md text-white/85 hover:bg-white/5">
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div data-reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-white/80 glass">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/60">Hello, I'm</p>
          <h1 className="mt-3 font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05]">
            Lasya <span className="text-gradient">Mahankali</span>
          </h1>
          <p className="mt-5 text-xl sm:text-2xl text-white/80 h-8">
            <span key={roleIdx} className="role-cycle animate-fade-up font-display font-semibold">
              {ROLES[roleIdx]}
            </span>
          </p>
          <p className="mt-6 max-w-xl text-white/65 leading-relaxed">
            Passionate Computer Science undergraduate specializing in Artificial Intelligence,
            Machine Learning, and software development. Dedicated to building intelligent applications
            and impactful digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => smoothScroll("projects")} className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white animated-gradient glow-primary" style={{ backgroundImage: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }}>
              View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
            <a href={resumeUrl} download={RESUME_FILENAME} title="Download Resume" aria-label="Download Resume" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white glass hover:bg-white/10 hover:scale-[1.03] active:scale-95 transition">
              <Download size={16} className="group-hover:translate-y-0.5 transition" /> Download Resume
            </a>
            <button onClick={() => smoothScroll("contact")} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white/90 border border-white/15 hover:border-white/30 hover:bg-white/5 hover:scale-[1.03] transition">
              <Mail size={16} /> Contact Me
            </button>
          </div>
          <div className="mt-6 flex items-center gap-3" aria-label="Social links">
            <SocialIcon href="https://www.linkedin.com/in/lasya-mahankali/" label="LinkedIn profile"><Linkedin size={18} /></SocialIcon>
            <SocialIcon href="https://github.com/lasyamahankali" label="GitHub profile"><Github size={18} /></SocialIcon>
            <SocialIcon href="mailto:lasya.mhk@gmail.com" label="Send email"><Mail size={18} /></SocialIcon>
          </div>
        </div>

        <div data-reveal data-reveal-delay="2" className="relative mx-auto">
          <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60 animate-pulse-glow" style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }} />
          <div className="relative glass-strong rounded-[1.75rem] p-3 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.5)] animate-float">
            <div className="relative overflow-hidden rounded-2xl">
              <picture>
                <source srcSet={portraitWebp} type="image/webp" />
                <img
                  src={portrait}
                  alt="Portrait of Lasya Mahankali, Computer Science Engineer and AI/ML Enthusiast"
                  width={800}
                  height={1067}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-[320px] sm:w-[380px] lg:w-[420px] aspect-[3/4] object-cover"
                  style={{ objectPosition: "55% 35%", filter: "saturate(1.05) contrast(1.03) brightness(0.95)" }}
                />
              </picture>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(11,15,25,0.15) 0%, transparent 35%, rgba(11,15,25,0.55) 100%)" }} />
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.25), transparent 60%)" }} />
            </div>
          </div>
          <FloatingBadge icon={<Brain size={16} />} label="AI" className="-top-5 -left-8" delay="0s" />
          <FloatingBadge icon={<Code2 size={16} />} label="Python" className="top-20 -right-10" delay="1s" />
          <FloatingBadge icon={<Cpu size={16} />} label="ML" className="bottom-24 -left-12" delay="2s" />
          <FloatingBadge icon={<Cloud size={16} />} label="AWS" className="-bottom-5 right-2" delay="1.5s" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { v: "2+", l: "Internships" },
          { v: "3+", l: "Major Projects" },
          { v: "7+", l: "Certifications" },
          { v: "1st", l: "Prize Winner" },
        ].map((s, i) => (
          <div key={s.l} data-reveal data-reveal-delay={String((i % 4) + 1)} className="glass rounded-2xl p-5 text-center tilt-card">
            <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
            <div className="mt-1 text-sm text-white/65">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FloatingBadge({ icon, label, className, delay }: { icon: React.ReactNode; label: string; className?: string; delay?: string }) {
  return (
    <div
      className={`absolute glass rounded-xl px-3.5 py-2 text-xs text-white flex items-center gap-2 animate-float whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] ring-1 ring-white/10 ${className}`}
      style={{ animationDelay: delay }}
    >
      <span aria-hidden="true" style={{ color: "#8B5CF6" }} className="inline-flex">{icon}</span>
      <span className="font-medium tracking-wide">{label}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub, icon }: { eyebrow: string; title: string; sub?: string; icon?: React.ReactNode }) {
  return (
    <div data-reveal className="text-center max-w-2xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.2em] text-white/70 glass">
        <span className="text-gradient inline-flex">{icon ?? <Sparkles size={12} />}</span> {eyebrow}
      </div>
      <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-white">
        {title.split(" ").map((w, i, arr) => (i === arr.length - 1 ? <span key={i} className="text-gradient">{" " + w}</span> : (i === 0 ? w : " " + w)))}
      </h2>
      {sub && <p className="mt-3 text-white/65">{sub}</p>}
    </div>
  );
}

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Introduction" title="About Me" />
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div data-reveal className="lg:col-span-2 glass-strong rounded-3xl p-6">
          <div className="flex items-center gap-4">
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img src={portrait} alt="" loading="lazy" decoding="async" width={120} height={120} className="h-20 w-20 rounded-2xl object-cover ring-1 ring-white/10" style={{ objectPosition: "55% 30%" }} />
            </picture>
            <div>
              <div className="font-display font-semibold text-white">Lasya Mahankali</div>
              <div className="text-sm text-white/60">CS Undergrad • AI / ML</div>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-white/75"><MapPin size={16} className="text-gradient" /> Hyderabad, Telangana, India</li>
            <li className="flex items-center gap-3 text-white/75"><GraduationCap size={16} className="text-gradient" /> B.Tech CSE • 2022 – 2026</li>
            <li className="flex items-center gap-3 text-white/75"><Briefcase size={16} className="text-gradient" /> Open to entry-level roles</li>
          </ul>
          <a href={resumeUrl} download={RESUME_FILENAME} title="Download Resume" aria-label="Download Resume" className="group mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white animated-gradient hover:scale-[1.03] active:scale-95 transition" style={{ backgroundImage: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }}>
            <Download size={16} className="group-hover:translate-y-0.5 transition" /> Download Resume
          </a>
        </div>

        <div data-reveal data-reveal-delay="2" className="lg:col-span-3 space-y-5 text-white/75 leading-relaxed">
          <p>I am a Computer Science undergraduate from <span className="text-white">Malineni Suseelamma Women's Engineering College</span> with practical experience in Artificial Intelligence, Machine Learning, and Web Development.</p>
          <p>Through internships, academic projects, and continuous learning, I have developed strong technical and problem-solving skills. I enjoy building intelligent systems and modern applications that solve real-world problems.</p>
          <p>I am currently seeking entry-level software opportunities where I can contribute, learn, and grow while creating meaningful technological solutions.</p>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              { k: "Focus", v: "AI / ML & Software" },
              { k: "Languages", v: "Python, SQL" },
              { k: "Status", v: "Actively Looking" },
            ].map((it) => (
              <div key={it.k} className="glass rounded-xl p-4">
                <div className="text-xs uppercase tracking-widest text-white/50">{it.k}</div>
                <div className="mt-1 text-white font-medium">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const SKILL_GROUPS = [
  {
    title: "Programming Languages", icon: <Code2 size={18} />,
    items: [
      { n: "Python", lvl: 90, icon: <SiPython />, color: "#3776AB" },
      { n: "SQL", lvl: 80, icon: <Database size={16} />, color: "#06B6D4" },
    ],
  },
  {
    title: "Web Technologies", icon: <Globe size={18} />,
    items: [
      { n: "HTML", lvl: 90, icon: <SiHtml5 />, color: "#E34F26" },
      { n: "CSS", lvl: 85, icon: <SiCss />, color: "#1572B6" },
      { n: "Angular", lvl: 70, icon: <SiAngular />, color: "#DD0031" },
    ],
  },
  {
    title: "Tools & Platforms", icon: <Wrench size={18} />,
    items: [
      { n: "GitHub", lvl: 85, icon: <SiGithub />, color: "#ffffff" },
      { n: "Streamlit", lvl: 80, icon: <SiStreamlit />, color: "#FF4B4B" },
      { n: "Jupyter Notebook", lvl: 90, icon: <SiJupyter />, color: "#F37626" },
      { n: "Excel", lvl: 80, icon: <PiMicrosoftExcelLogoFill />, color: "#21A366" },
      { n: "AWS", lvl: 70, icon: <FaAws />, color: "#FF9900" },
    ],
  },
  {
    title: "AI / ML", icon: <Brain size={18} />,
    items: [
      { n: "Machine Learning", lvl: 85, icon: <Brain size={16} />, color: "#8B5CF6" },
      { n: "Deep Learning", lvl: 80, icon: <Network size={16} />, color: "#06B6D4" },
      { n: "CNN", lvl: 80, icon: <Cpu size={16} />, color: "#3B82F6" },
      { n: "LSTM", lvl: 75, icon: <Activity size={16} />, color: "#8B5CF6" },
      { n: "Data Preprocessing", lvl: 85, icon: <BarChart3 size={16} />, color: "#06B6D4" },
    ],
  },
];

function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Toolkit" title="Skills & Expertise" sub="A blend of software engineering fundamentals and modern AI/ML practice." />
      <div className="grid md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((g, idx) => (
          <div key={g.title} data-reveal data-reveal-delay={String((idx % 4) + 1)} className="glass-strong rounded-2xl p-6 tilt-card">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-xl glass text-gradient">{g.icon}</span>
              <h3 className="font-display font-semibold text-white text-lg">{g.title}</h3>
            </div>
            <div className="mt-5 space-y-4">
              {g.items.map((s) => (
                <div key={s.n} className="group/skill">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-white/85 flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className="inline-flex items-center justify-center h-7 w-7 rounded-lg glass transition-all duration-300 group-hover/skill:scale-110"
                        style={{ color: s.color, boxShadow: `0 0 0 0 ${s.color}40` }}
                        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 18px -2px ${s.color}80`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0 0 ${s.color}40`; }}
                      >
                        <span className="text-[15px]">{s.icon}</span>
                      </span>
                      {s.n}
                    </span>
                    <span className="text-white/50">{s.lvl}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full animated-gradient" style={{ width: `${s.lvl}%`, backgroundImage: "linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const EXPERIENCE = [
  {
    role: "AI & ML Intern",
    org: "IBM SkillBuild",
    year: "2024",
    points: [
      "Worked on machine learning models using Python and Jupyter Notebook.",
      "Explored neural networks and deep learning concepts.",
      "Performed data preprocessing and model evaluation.",
      "Strengthened AI/ML foundations through hands-on implementation.",
    ],
  },
  {
    role: "Web & Mobile App Development Intern",
    org: "Data Valley",
    year: "2025",
    points: [
      "Assisted in developing responsive web and mobile applications.",
      "Worked with HTML, CSS, and Flutter fundamentals.",
      "Collaborated with team members to test and improve application functionality.",
      "Enhanced user experience and application quality.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Journey" title="Professional Experience" />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg,transparent, #3B82F6, #8B5CF6, #06B6D4, transparent)" }} />
        <div className="space-y-12">
          {EXPERIENCE.map((e, i) => {
            const right = i % 2 === 1;
            return (
              <div key={e.role} data-reveal className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full glow-primary" style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }} />
                <div className={`pl-12 md:pl-0 ${right ? "md:col-start-2" : "md:text-right md:pr-10"}`}>
                  <div className="inline-flex items-center gap-2 text-xs text-white/60">
                    <Briefcase size={12} /> {e.year}
                  </div>
                  <h3 className="mt-1 font-display font-semibold text-xl text-white">{e.role}</h3>
                  <div className="text-gradient font-medium">{e.org}</div>
                </div>
                <div className={`pl-12 md:pl-0 mt-3 md:mt-0 ${right ? "md:col-start-1 md:row-start-1 md:text-right md:pr-10" : "md:col-start-2"}`}>
                  <div className="glass-strong rounded-2xl p-5">
                    <ul className="space-y-2 text-sm text-white/75 text-left">
                      {e.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-gradient" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

const PROJECTS = [
  {
    title: "Auralytics – Speech Emotion Recognition",
    stack: ["Python", "CNN", "LSTM", "Streamlit"],
    desc: "AI-driven speech emotion recognition system that classifies 8 emotions from speech signals with ~85% accuracy. Interactive Streamlit interface for real-time predictions.",
    award: null as string | null,
    icon: (
      <span className="relative inline-flex">
        <Mic size={26} />
        <Brain size={14} className="absolute -bottom-1 -right-1.5" style={{ color: "#06B6D4" }} />
      </span>
    ),
    color: "#8B5CF6",
  },
  {
    title: "Insurance Claim Bot",
    stack: ["Python", "NLP", "Chatbot"],
    desc: "AI-powered conversational chatbot that automates insurance claim assistance and improves customer support through intelligent, context-aware interactions.",
    award: null,
    icon: <MessageCircle size={26} />,
    color: "#3B82F6",
  },
  {
    title: "Fake Product Identification",
    stack: ["Python", "Machine Learning"],
    desc: "Intelligent solution for identifying counterfeit products through ML-based verification — recognized for innovation and practical implementation.",
    award: "🏆 First Prize – Project Expo",
    icon: <ShieldCheck size={26} />,
    color: "#06B6D4",
  },
];

function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Selected Work" title="Featured Projects" sub="Building intelligent, real-world systems across speech, language, and vision." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <article key={p.title} data-reveal data-reveal-delay={String((i % 3) + 1)} className="group relative glass-strong rounded-2xl p-6 tilt-card overflow-hidden">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition" style={{ background: `linear-gradient(135deg, ${p.color}, #8B5CF6)` }} />
            <div className="relative">
              <div className="flex items-start justify-between">
                <span
                  className="grid place-items-center h-16 w-16 rounded-2xl glass-strong transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ color: p.color, boxShadow: `0 10px 30px -10px ${p.color}90, inset 0 0 0 1px ${p.color}40` }}
                  aria-hidden
                >
                  {p.icon}
                </span>
                {p.award && <span className="text-xs px-2 py-1 rounded-full glass text-white/85">{p.award}</span>}
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-white leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/75">{s}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2">
                <a href="https://github.com/lasyamahankali" target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg glass text-white/90 hover:bg-white/10 hover:scale-[1.03] transition">
                  <Github size={12} /> View on GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Academics" title="Education" icon={<GraduationCap size={12} />} />
      <div data-reveal className="max-w-3xl mx-auto glass-strong rounded-3xl p-8 tilt-card">
        <div className="flex items-start gap-5">
          <span className="grid place-items-center h-14 w-14 rounded-2xl glass text-gradient shrink-0">
            <GraduationCap size={26} />
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 justify-between">
              <h3 className="font-display font-semibold text-xl text-white">B.Tech, Computer Science & Engineering</h3>
              <span className="text-xs px-2.5 py-1 rounded-full glass text-white/85">2022 – 2026</span>
            </div>
            <div className="mt-1 text-gradient font-medium">Malineni Suseelamma Women's Engineering College</div>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              <div className="glass rounded-xl p-4">
                <div className="text-xs uppercase tracking-widest text-white/50">CGPA</div>
                <div className="mt-1 text-white font-display font-bold text-2xl">7.8<span className="text-base text-white/60"> / 10</span></div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs uppercase tracking-widest text-white/50">Major</div>
                <div className="mt-1 text-white font-medium">Computer Science</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs uppercase tracking-widest text-white/50">Focus</div>
                <div className="mt-1 text-white font-medium">AI / ML</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const CERTS = [
  { name: "Python Essentials 1 – Cisco Networking Academy", icon: <SiPython />, color: "#3776AB" },
  { name: "AWS Cloud Computing", icon: <FaAws />, color: "#FF9900" },
  { name: "Git & GitHub Mastering", icon: <SiGithub />, color: "#ffffff" },
  { name: "Career Essentials in Generative AI – Microsoft & LinkedIn", icon: <Sparkles size={18} />, color: "#8B5CF6" },
  { name: "Yuva AI for All – NASSCOM FutureSkills", icon: <Brain size={18} />, color: "#06B6D4" },
  { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
  {
    name: "NodeJS Case Study – Movie App on NodeJS & MongoDB",
    icon: (
      <span className="relative inline-flex items-center gap-0.5">
        <SiNodedotjs style={{ color: "#3C873A" }} />
        <SiMongodb style={{ color: "#47A248" }} />
      </span>
    ),
    color: "#47A248",
  },
];

function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Continuous Learning" title="Certifications" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTS.map((c, i) => (
          <div
            key={c.name}
            data-reveal data-reveal-delay={String((i % 3) + 1)}
            className="group/cert relative glass rounded-2xl p-5 tilt-card flex items-start gap-3 overflow-hidden transition-all duration-500"
            style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.06)` }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 18px 40px -18px ${c.color}80, 0 0 0 1px ${c.color}55`; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0 1px rgba(255,255,255,0.06)`; }}
          >
            <span
              aria-hidden
              className="grid place-items-center h-11 w-11 rounded-xl glass shrink-0 text-lg transition-transform duration-500 group-hover/cert:scale-110 group-hover/cert:-rotate-3"
              style={{ color: c.color, boxShadow: `inset 0 0 0 1px ${c.color}40` }}
            >
              {c.icon}
            </span>
            <div>
              <div className="text-sm text-white font-medium leading-snug">{c.name}</div>
              <div className="mt-1 text-xs text-white/55">Verified Credential</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Recognition" title="Achievements" />
      <div data-reveal className="relative max-w-3xl mx-auto glass-strong rounded-3xl p-8 overflow-hidden tilt-card">
        <div className="absolute -inset-1 opacity-30 blur-3xl" style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }} />
        <div className="relative flex items-start gap-5">
          <span className="grid place-items-center h-16 w-16 rounded-2xl animated-gradient text-white shrink-0" style={{ backgroundImage: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }}>
            <Trophy size={28} />
          </span>
          <div>
            <h3 className="font-display font-semibold text-xl text-white">First Prize – Project Expo</h3>
            <p className="mt-2 text-white/75 leading-relaxed">
              Awarded for the <span className="text-white">Fake Product Identification</span> project, recognized for its innovation, technical depth, and practical real-world implementation.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

type FormValues = { name: string; email: string; subject: string; message: string };
type FieldErrors = Partial<Record<keyof FormValues, string>>;

function validateContact(v: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!v.name.trim()) errors.name = "Name is required.";
  else if (v.name.length > 100) errors.name = "Name is too long.";
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!v.email.trim()) errors.email = "Email is required.";
  else if (!emailRe.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  if (v.subject.length > 150) errors.subject = "Subject is too long.";
  if (!v.message.trim()) errors.message = "Message is required.";
  else if (v.message.length > 3000) errors.message = "Message is too long (max 3000 characters).";
  return errors;
}

function Contact() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const update = (k: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return; // bot
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstKey = Object.keys(errs)[0] as keyof FormValues;
      document.getElementById(`cf-${firstKey}`)?.focus();
      setStatus("error");
      return;
    }
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured", {
        description: "Set VITE_EMAILJS_* variables in your .env file.",
        duration: 4000,
      });
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          to_email: "lasya.mhk@gmail.com",
        },
        { publicKey }
      );
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
      toast.success("Message Sent Successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 4000,
        icon: <CheckCircle2 className="text-emerald-400" size={18} />,
      });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      toast.error("Failed to Send Message", {
        description: err instanceof Error ? err.message : "Something went wrong. Please try again.",
        duration: 4000,
        icon: <AlertCircle className="text-rose-400" size={18} />,
      });
    }
  };

  const sending = status === "sending";

  return (
    <Section id="contact">
      <SectionHeading eyebrow="Get in touch" title="Let's Connect" sub="Actively seeking opportunities in Software Development, AI, and Machine Learning." />
      <div className="grid lg:grid-cols-5 gap-6">
        <div data-reveal className="lg:col-span-2 glass-strong rounded-3xl p-7 space-y-4">
          <p className="text-white/75 leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or networking — I'd love to hear from you.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-white/85">
              <span className="grid place-items-center h-9 w-9 rounded-lg glass text-gradient"><Mail size={16} /></span>
              <a href="mailto:lasya.mhk@gmail.com" className="hover:text-white">lasya.mhk@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 text-white/85">
              <span className="grid place-items-center h-9 w-9 rounded-lg glass text-gradient"><Phone size={16} /></span>
              <a href="tel:+919391089637" className="hover:text-white">+91 93910 89637</a>
            </li>
            <li className="flex items-center gap-3 text-white/85">
              <span className="grid place-items-center h-9 w-9 rounded-lg glass text-gradient"><MapPin size={16} /></span>
              Hyderabad, Telangana, India
            </li>
          </ul>
          <div className="pt-2 flex items-center gap-3">
            <SocialIcon href="https://www.linkedin.com/in/lasya-mahankali/" label="LinkedIn"><Linkedin size={18} /></SocialIcon>
            <SocialIcon href="https://github.com/lasyamahankali" label="GitHub"><Github size={18} /></SocialIcon>
            <SocialIcon href="mailto:lasya.mhk@gmail.com" label="Email"><Mail size={18} /></SocialIcon>
          </div>
        </div>

        <form
          data-reveal data-reveal-delay="2"
          onSubmit={onSubmit}
          noValidate
          aria-label="Contact form"
          className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-4"
        >
          <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <label>Leave this field empty<input ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" id="cf-name" error={errors.name}>
              <input id="cf-name" name="name" autoComplete="name" value={values.name} onChange={update("name")}
                aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined}
                disabled={sending} maxLength={100} className="input" placeholder="Your name" />
            </Field>
            <Field label="Email" id="cf-email" error={errors.email}>
              <input id="cf-email" name="email" type="email" autoComplete="email" value={values.email} onChange={update("email")}
                aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined}
                disabled={sending} maxLength={255} className="input" placeholder="you@email.com" />
            </Field>
          </div>
          <Field label="Subject" id="cf-subject" error={errors.subject}>
            <input id="cf-subject" name="subject" value={values.subject} onChange={update("subject")}
              aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "cf-subject-err" : undefined}
              disabled={sending} maxLength={150} className="input" placeholder="How can I help?" />
          </Field>
          <Field label="Message" id="cf-message" error={errors.message}>
            <textarea id="cf-message" name="message" rows={5} value={values.message} onChange={update("message")}
              aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined}
              disabled={sending} maxLength={3000} className="input resize-none" placeholder="Tell me about the role or project..." />
          </Field>

          <div aria-live="polite" aria-atomic="true" role="status" className="min-h-[1.25rem]">
            {status === "error" && Object.keys(errors).length > 0 && (
              <div className="flex items-start gap-2 text-sm text-rose-300">
                <AlertCircle size={16} className="mt-0.5 shrink-0" /> <span>Please fix the highlighted fields and try again.</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-white/55">I usually reply within 24 hours.</p>
            <button
              type="submit"
              disabled={sending}
              aria-busy={sending}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white animated-gradient disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              style={{ backgroundImage: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }}
            >
              {sending ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>)
                : status === "success" ? (<><CheckCircle2 size={16} /> Sent</>)
                : (<><Send size={16} /> Send Message</>)}
            </button>
          </div>
          <style>{`.input{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:.75rem;padding:.7rem .85rem;color:#fff;outline:none;transition:border-color .2s, box-shadow .2s;font-size:.875rem}
          .input::placeholder{color:rgba(255,255,255,.4)}
          .input:focus{border-color:rgba(139,92,246,.6);box-shadow:0 0 0 4px rgba(139,92,246,.15)}
          .input:disabled{opacity:.65;cursor:not-allowed}
          .input[aria-invalid="true"]{border-color:rgba(244,63,94,.6);box-shadow:0 0 0 4px rgba(244,63,94,.12)}`}</style>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, id, error, children }: { label: string; id?: string; error?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-xs uppercase tracking-widest text-white/65">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span id={id ? `${id}-err` : undefined} className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
          <AlertCircle size={12} aria-hidden="true" /> {error}
        </span>
      )}
    </label>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid place-items-center h-10 w-10 rounded-xl glass text-white/85 hover:text-white hover:-translate-y-0.5 transition">
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 grid gap-8 sm:grid-cols-3 items-start">
        <div className="sm:col-span-2 space-y-2">
          <p className="font-display font-semibold text-white">
            Designed & Developed by <span className="text-gradient">Lasya Mahankali</span>
          </p>
          <p className="text-sm text-white/65 max-w-md leading-relaxed">
            Passionate about building intelligent applications and impactful digital experiences.
          </p>
        </div>
        <div className="flex sm:justify-end items-center gap-3" aria-label="Social links">
          <SocialIcon href="https://www.linkedin.com/in/lasya-mahankali/" label="LinkedIn profile"><Linkedin size={16} /></SocialIcon>
          <SocialIcon href="https://github.com/lasyamahankali" label="GitHub profile"><Github size={16} /></SocialIcon>
          <SocialIcon href="mailto:lasya.mhk@gmail.com" label="Send email"><Mail size={16} /></SocialIcon>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-center text-xs text-white/55">
          © 2026 Lasya Mahankali. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 h-11 w-11 grid place-items-center rounded-full text-white animated-gradient glow-primary"
      style={{ backgroundImage: "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)" }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
