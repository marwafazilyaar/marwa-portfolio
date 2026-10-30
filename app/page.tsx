
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "3D Game World",
    description: "An interactive world built with React and Three.js.",
    tags: ["React", "Three.js"],
  },
  {
    number: "02",
    title: "Creative Website",
    description: "A modern website with beautiful animations.",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Coding Experiments",
    description: "Creative coding experiments and new ideas.",
    tags: ["JavaScript", "CSS"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "Git",
  "Creative Coding",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0714] text-white selection:bg-purple-500/40">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 45, 0], y: [0, 35, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/25 blur-[120px]"
        />

        <motion.div
          animate={{ x: [0, -35, 0], y: [0, 45, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-pink-600/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="#home" className="text-xl font-black tracking-tight">
          MARWA<span className="text-purple-400">.DEV</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#about" className="transition hover:text-purple-300">
            About
          </a>
          <a href="#projects" className="transition hover:text-purple-300">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-purple-300">
            Skills
          </a>
          <a href="#videos" className="transition hover:text-purple-300">
            Videos
          </a>
          <a
            href="#contact"
            className="rounded-full border border-purple-400/40 px-5 py-2.5 transition hover:bg-purple-500/20"
          >
            Contact ↗
          </a>
        </nav>

        <a href="#contact" className="text-sm text-purple-300 md:hidden">
          Contact ↗
        </a>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-400/10 px-4 py-2 text-sm text-purple-200">
            <Sparkles size={16} />
            Welcome to my digital world
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Creative Developer
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-7xl">
            Marwa
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              Fazilyaar.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I turn ideas into digital experiences. Exploring web development,
            creative coding, interactive worlds, and new possibilities.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3.5 font-semibold shadow-lg shadow-purple-900/30 transition hover:-translate-y-1"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition group-hover:rotate-45"
              />
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/15 px-6 py-3.5 text-zinc-200 transition hover:border-purple-400/60 hover:bg-white/5"
            >
              Discover My Story
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5 text-zinc-500">
            <a
              aria-label="GitHub"
              href="https://github.com/"
              className="transition hover:text-white"
            >
             <Code2 size={21} />
            </a>

            <a
              aria-label="Instagram"
              href="https://instagram.com/"
              className="transition hover:text-pink-400"
            >
              <Sparkles size={21} />
            </a>

            <a
              aria-label="YouTube"
              href="https://youtube.com/@MarwaFazilyaar"
              className="transition hover:text-red-400"
            >
              <ArrowUpRight size={21} />
            </a>

            <span className="h-px w-10 bg-white/15" />

            <span className="text-xs tracking-widest">
              BUILD · CREATE · LEARN
            </span>
          </div>
        </motion.div>

        {/* Animated code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/15 via-[#171025] to-cyan-500/10 p-6 shadow-2xl shadow-purple-950/50 sm:p-8"
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-pink-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-auto font-mono text-xs text-zinc-500">
                marwa.tsx
              </span>
            </div>

            <div className="py-9 font-mono text-sm leading-8 sm:text-base">
              <p className="text-purple-300">
                const <span className="text-cyan-300">developer</span> = {"{"}
              </p>
              <p className="pl-5 text-zinc-400">
                name: <span className="text-emerald-300">"Marwa Fazilyaar"</span>,
              </p>
              <p className="pl-5 text-zinc-400">
                passion: <span className="text-pink-300">"Creating"</span>,
              </p>
              <p className="pl-5 text-zinc-400">
                mindset: <span className="text-emerald-300">"Keep learning"</span>,
              </p>
              <p className="pl-5 text-zinc-400">
                dreams: <span className="text-cyan-300">"Unlimited"</span>
              </p>
              <p className="text-purple-300">{"};"}</p>

              <motion.p
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.3, repeat: Infinity }}
                className="mt-5 text-purple-300"
              >
                ▍ Creating something amazing...
              </motion.p>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3">
                <Code2 className="text-cyan-300" />
                <div>
                  <p className="text-sm font-semibold">Creative mind</p>
                  <p className="text-xs text-zinc-500">
                    Always building something
                  </p>
                </div>
              </div>
              <Sparkles className="text-purple-300" size={20} />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -right-2 top-12 rounded-2xl border border-cyan-300/20 bg-[#121522] p-4 shadow-xl sm:-right-6"
          >
            <span className="text-xs text-zinc-400">CURRENT MODE</span>
            <p className="mt-1 font-semibold text-cyan-300">✦ Creating</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute -bottom-5 -left-2 rounded-2xl border border-pink-300/20 bg-[#191021] p-4 shadow-xl sm:-left-6"
          >
            <p className="text-sm font-semibold text-pink-300">
              Ideas → Reality
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          01 / About Me
        </p>

        <div className="mt-5 grid gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Curious mind.
            <br />
            <span className="text-purple-300">Creative spirit.</span>
          </h2>

          <p className="leading-8 text-zinc-400">
            I am Marwa Fazilyaar, an aspiring developer passionate about
            technology, programming, and creating meaningful digital
            experiences. This is where I share my learning journey, experiments,
            and projects as I grow.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 py-20 lg:px-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-300">
          02 / Selected Work
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Projects<span className="text-purple-300">.</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-purple-400/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-purple-300">
                  {project.number} / 03
                </span>
                <ArrowUpRight className="text-zinc-600 transition group-hover:text-pink-300" />
              </div>

              <h3 className="mt-12 text-2xl font-bold">{project.title}</h3>

              <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 py-20 lg:px-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          03 / My Toolkit
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Skills & <span className="text-cyan-300">Learning.</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.06, y: -3 }}
              className={`rounded-2xl border px-5 py-3 text-sm ${
                index % 3 === 0
                  ? "border-purple-400/30 bg-purple-400/10 text-purple-200"
                  : index % 3 === 1
                    ? "border-pink-400/30 bg-pink-400/10 text-pink-200"
                    : "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <p className="mt-5 text-sm text-zinc-500">
          Keep the skills that match your current learning and experience.
        </p>
      </section>

      {/* Videos */}
      <section
        id="videos"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 py-20 lg:px-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-300">
          04 / Watch & Learn
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          My Videos<span className="text-pink-300">.</span>
        </h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 p-8 sm:p-12">
          <Sparkles size={35} className="text-pink-300" />

          <h3 className="mt-5 text-2xl font-bold">Code. Create. Share.</h3>

          <p className="mt-3 max-w-xl leading-7 text-zinc-400">
            Discover coding videos, project walkthroughs, creative experiments,
            and lessons from my development journey.
          </p>

          <a
            href="https://youtube.com/@MarwaFazilyaar"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-pink-200"
          >
            Explore My Channel <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* Blog */}
      <section
        id="blog"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 py-16 lg:px-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          05 / Notes & Ideas
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          The Learning Log<span className="text-purple-300">.</span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Coding notes, useful lessons, and new ideas. This section is ready for
          future articles.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-12"
      >
        <div className="rounded-[2rem] border border-purple-400/20 bg-gradient-to-br from-purple-500/10 via-white/[0.02] to-pink-500/10 p-8 sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            06 / Get in Touch
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Let’s create it.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-zinc-400">
            I am excited to keep learning, share ideas, and connect with
            creative people.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-500 px-6 py-3.5 font-semibold transition hover:bg-purple-400"
          >
            Say Hello <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <a href="#home" className="font-bold text-white">
            MARWA<span className="text-purple-300">.DEV</span>
          </a>

          <span>Designed with curiosity & a little neon ✦</span>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Back to top <ArrowDown className="rotate-180" size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}
