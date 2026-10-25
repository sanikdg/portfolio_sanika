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

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-3xl font-bold text-white">
        {title}
        <span className="mt-2 block h-1 w-12 rounded bg-indigo-500" />
      </h2>
      {children}
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
      {children}
    </span>
  )
}

function LinkButton({ href, children, primary }) {
  if (!href) return null
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={
        primary
          ? 'rounded-lg bg-indigo-500 px-5 py-3 font-semibold text-white transition hover:bg-indigo-400'
          : 'rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-white'
      }
    >
      {children}
    </a>
  )
}

export default function App() {
  return (
    <div>
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-bold text-white">
            {profile.name}
          </a>
          <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-white">
                {n}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-24">
          <p className="mb-4 font-medium text-indigo-400">Hi, I am</p>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl">{profile.name}</h1>
          <h2 className="mt-3 text-2xl font-semibold text-slate-400 sm:text-3xl">
            {profile.role}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#contact" primary>
              Hire me
            </LinkButton>
            <LinkButton href="#projects">View projects</LinkButton>
            <LinkButton href={profile.fiverr}>Fiverr</LinkButton>
            <LinkButton href={profile.resume}>Resume</LinkButton>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-3xl space-y-4 text-lg text-slate-400">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="mb-4 font-semibold text-white">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <div key={e.role} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                <span className="text-sm text-slate-500">{e.period}</span>
              </div>
              <p className="mb-4 text-indigo-400">{e.company}</p>
              <ul className="list-disc space-y-2 pl-5 text-slate-400">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition hover:border-indigo-500"
              >
                {p.image && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <img
                      src={p.image}
                      alt={`${p.title} website screenshot`}
                      loading="lazy"
                      className="aspect-video w-full object-cover object-top"
                    />
                  </a>
                )}
                <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mb-3 text-sm text-indigo-400">{p.type}</p>
                <p className="mb-4 flex-1 text-slate-400">{p.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-semibold">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300">
                      Live site
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                      Code
                    </a>
                  )}
                </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="services" title="Services">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="mb-2 font-semibold text-white">{s.title}</h3>
                <p className="text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-semibold text-white">Highlights</h3>
            <ul className="list-disc space-y-2 pl-5 text-slate-400">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-6 max-w-2xl text-lg text-slate-400">
            Have a project in mind? Send me a message with your idea and I will tell you the best
            way to build it.
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href={`mailto:${profile.email}`} primary>
              {profile.email}
            </LinkButton>
            <LinkButton href={profile.github}>GitHub</LinkButton>
            <LinkButton href={profile.linkedin}>LinkedIn</LinkButton>
            <LinkButton href={profile.fiverr}>Fiverr</LinkButton>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
