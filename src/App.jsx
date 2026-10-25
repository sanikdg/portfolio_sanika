import { useEffect, useRef, useState } from 'react'
import {
  profile,
  about,
  skills,
  experience,
  projects,
  services,
  achievements,
} from './data'

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact']
const roles = [
  'Full Stack MERN Developer',
  'React and Node.js Engineer',
  'Website and Web App Builder',
  'AI Feature Developer',
]
const serviceIcons = ['🌐', '⚙️', '🛠️', '🚀', '🤖', '🔗']
const stats = [
  { value: '3', label: 'Live client websites' },
  { value: '2', label: 'AI-powered projects' },
  { value: 'MERN', label: 'Core stack' },
  { value: '🏆', label: 'National hackathon runner-up' },
]

function useTyping(words) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const delay = deleting ? 35 : text === word ? 1600 : 75
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setI((n) => n + 1)
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return text
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
          {eyebrow}
        </p>
        <h2 className="mb-12 text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  )
}

function Button({ href, children, primary }) {
  if (!href) return null
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={
        primary
          ? 'rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 hover:shadow-indigo-500/50'
          : 'rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-indigo-400 hover:bg-white/10'
      }
    >
      {children}
    </a>
  )
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 animate-blob rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 animate-blob rounded-full bg-fuchsia-600/20 blur-3xl [animation-delay:-5s]" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-blob rounded-full bg-cyan-500/20 blur-3xl [animation-delay:-9s]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition ${
        scrolled || open ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur-lg' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-extrabold text-white">
          <span className="gradient-text">SP</span>
          <span className="text-indigo-400">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-white">
              {n}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-white/10 px-4 py-2 text-white transition hover:bg-indigo-500"
          >
            Hire me
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-white/15 px-3 py-2 text-white md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-4 md:hidden">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5"
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function CodeCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm animate-float">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-40 blur-xl" />
      <div className="glass relative rounded-3xl p-6 font-mono text-sm">
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-fuchsia-400">
          const <span className="text-sky-300">developer</span> = {'{'}
        </p>
        <p className="pl-4 text-slate-300">
          name: <span className="text-emerald-300">'Sanika Patil'</span>,
        </p>
        <p className="pl-4 text-slate-300">
          stack: <span className="text-emerald-300">['MongoDB', 'Express',</span>
        </p>
        <p className="pl-10 text-emerald-300">'React', 'Node.js'],</p>
        <p className="pl-4 text-slate-300">
          deploys: <span className="text-emerald-300">['AWS', 'Vercel'],</span>
        </p>
        <p className="pl-4 text-slate-300">
          available: <span className="text-amber-300">true</span>
        </p>
        <p className="text-fuchsia-400">{'}'}</p>
      </div>
    </div>
  )
}

function Hero() {
  const role = useTyping(roles)
  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open for freelance projects
        </p>
        <h1 className="text-5xl font-black leading-tight text-white sm:text-7xl">
          Hi, I am <span className="gradient-text">{profile.name}</span>
        </h1>
        <h2 className="cursor mt-5 min-h-[2.5rem] text-2xl font-semibold text-slate-300 sm:text-3xl">
          {role}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.tagline}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="#contact" primary>
            Hire me
          </Button>
          <Button href="#projects">View my work</Button>
          <Button href={profile.fiverr}>Fiverr</Button>
          <Button href={profile.resume}>Resume</Button>
        </div>
      </div>
      <CodeCard />
    </section>
  )
}

function BrowserFrame({ src, alt, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block overflow-hidden border-b border-white/10 bg-slate-900"
    >
      <div className="flex items-center gap-1.5 bg-slate-900 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 text-xs text-slate-500">
          {href.replace('https://', '')}
        </span>
      </div>
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="aspect-video w-full object-cover object-top transition duration-700 hover:scale-105"
        />
      </div>
    </a>
  )
}

function ProjectCard({ p }) {
  return (
    <article className="glass glow-hover flex h-full flex-col overflow-hidden rounded-2xl">
      {p.image ? (
        <BrowserFrame src={p.image} alt={`${p.title} website screenshot`} href={p.live} />
      ) : (
        <div className="flex aspect-video items-center justify-center border-b border-white/10 bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-cyan-500/20 text-5xl">
          🤖
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
          {p.type}
        </p>
        <h3 className="mb-3 text-xl font-bold text-white">{p.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
        <div className="flex gap-4 text-sm font-semibold">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300">
              Live site ↗
            </a>
          )}
          {p.code && (
            <a href={p.code} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />

      <main id="top">
        <Hero />

        <section className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-8 text-center lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="gradient-text text-4xl font-black">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Section id="about" eyebrow="Who I am" title="About me">
          <Reveal>
            <div className="glass max-w-3xl space-y-4 rounded-2xl p-8 text-lg leading-relaxed text-slate-300">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="skills" eyebrow="What I use" title="Skills and tools">
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items], i) => (
              <Reveal key={group} delay={i * 90}>
                <div className="glass glow-hover h-full rounded-2xl p-6">
                  <h3 className="mb-4 text-lg font-bold text-white">{group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="My journey" title="Experience">
          <div className="relative border-l border-indigo-500/40 pl-8">
            {experience.map((e) => (
              <Reveal key={e.role}>
                <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-indigo-400 shadow-[0_0_20px_4px_rgba(129,140,248,0.7)]" />
                <div className="glass glow-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">{e.role}</h3>
                    <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                      {e.period}
                    </span>
                  </div>
                  <p className="mb-4 mt-1 text-indigo-300">{e.company}</p>
                  <ul className="space-y-2 text-slate-400">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="My work" title="Featured projects">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="services" eyebrow="How I can help" title="Services">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <div className="glass glow-hover h-full rounded-2xl p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 text-2xl">
                    {serviceIcons[i]}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                  <p className="text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="glass mt-12 rounded-2xl p-8">
              <h3 className="mb-4 text-xl font-bold text-white">🏆 Highlights</h3>
              <ul className="grid gap-3 text-slate-400 md:grid-cols-2">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <Section id="contact" eyebrow="Get in touch" title="Let's work together">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-indigo-600/40 via-violet-600/30 to-fuchsia-600/30 p-10 text-center sm:p-16">
              <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                Have a project in mind?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
                Send me your idea and I will tell you the best way to build it.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={`mailto:${profile.email}`} primary>
                  {profile.email}
                </Button>
                <Button href={profile.github}>GitHub</Button>
                <Button href={profile.linkedin}>LinkedIn</Button>
                <Button href={profile.fiverr}>Fiverr</Button>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {profile.name}. Built with React and Tailwind.
      </footer>
    </div>
  )
}
