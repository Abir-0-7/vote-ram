"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { awards, base, cats, certificates, alsoCompeted, competitions, credentials, emailParts, events, learning, ongoing, papers, plan, profiles, type Honor } from "@/data/content";
import portrait from "@/assets/portrait.jpg";
import poster from "@/assets/poster.jpg";

const wrap = "mx-auto max-w-6xl px-5";
const h2 = "font-heading text-3xl font-extrabold tracking-tight text-navy text-balance md:text-5xl";

export function RamStick({ className = "" }: { className?: string }) {
  const pins = Array.from({ length: 40 }, (_, i) => 10 + i * 7.6).filter((x) => x < 192 || x > 206);
  return (
    <svg viewBox="0 0 320 118" className={className} role="img" aria-label="RAM memory module, the election symbol">
      <rect x="2" y="4" width="316" height="86" rx="7" fill="#0b2a5b" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <motion.rect x={16 + i * 74} y="16" width="62" height="50" rx="5" stroke="#9fd0ff" strokeWidth="2"
            initial={{ fill: "#9fd0ff" }} animate={{ fill: "#1f5fd0" }} transition={{ delay: 0.5 + i * 0.2, duration: 0.7 }} />
          <circle cx={25 + i * 74} cy="25" r="2.5" fill="#fff" />
          <rect x={30 + i * 74} y="36" width="34" height="3" rx="1.5" fill="#fff" opacity=".55" />
          <rect x={30 + i * 74} y="44" width="22" height="3" rx="1.5" fill="#fff" opacity=".35" />
        </g>
      ))}
      <rect x="2" y="76" width="316" height="3" fill="#1f5fd0" />
      {pins.map((x) => (
        <rect key={x} x={x} y="90" width="4.6" height="24" rx="1" fill="#f5c84b" />
      ))}
    </svg>
  );
}

export function SymbolCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border-2 border-royal/30 bg-white p-4 text-center shadow-2xl ${className}`}>
      <p className="text-xs font-bold tracking-[.3em] text-navy/60">SYMBOL</p>
      <RamStick className="mx-auto mt-2 w-full" />
      <p className="font-heading mt-2 text-3xl font-extrabold text-navy">RAM</p>
    </div>
  );
}

export function Hero() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => setDays(Math.ceil((new Date("2026-10-29T00:00:00+06:00").getTime() - Date.now()) / 864e5)), []);
  return (
    <header className="bg-navy text-white">
      <div className={`${wrap} grid items-center gap-12 pb-20 pt-12 md:grid-cols-[1.1fr_.9fr] md:pt-20`}>
        <div>
          <p className="text-sky/80">PCIU Computer Club · 4th Committee · General Secretary</p>
          <h1 className="font-heading mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-7xl">
            Something meaningful, every month.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-sky/90">
            I&apos;m Md Abdullah Al Mamun. The earlier committees built a strong base. This one should make the club
            busier, more organized, and open to every student.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#plan" className="rounded-lg bg-white px-5 py-3 font-bold text-navy">Read the 15 commitments</a>
            <a href="#progress" className="rounded-lg border-2 border-white/60 px-5 py-3 font-bold">Track progress</a>
          </div>
          <p className="mt-6 inline-block rounded-lg bg-royal px-4 py-2 font-bold">
            Vote on 29 October{days !== null && days > 0 ? ` · ${days} day${days > 1 ? "s" : ""} left` : ""} · Symbol: RAM
          </p>
        </div>
        <div className="relative">
          <Image src={portrait} alt="Md Abdullah Al Mamun" priority placeholder="blur"
            className="aspect-[4/5] w-full rounded-t-[3rem] rounded-b-xl object-cover object-top" />
          <SymbolCard className="absolute -bottom-8 -left-4 w-56 -rotate-3 md:-left-12 md:w-64" />
        </div>
      </div>
    </header>
  );
}

export function About() {
  return (
    <section className={`${wrap} grid gap-10 py-16 md:grid-cols-2`}>
      <div>
        <h2 className={h2}>Why I&apos;m running</h2>
        <p className="mt-4 max-w-prose text-lg">
          My goal is simple: something meaningful happens in the club every month, and every student knows how to take part.
          I will not promise what I cannot deliver. Every point has a target, and I will report on it openly each month.
        </p>
      </div>
      <ul className="grid gap-3 self-center">
        {credentials.map((c) => (
          <li key={c} className="border-l-4 border-royal pl-4">{c}</li>
        ))}
      </ul>
    </section>
  );
}

export function Plan() {
  const [f, setF] = useState("all");
  const list = plan.filter((p) => f === "all" || p.c === f);
  return (
    <section id="plan" className={`${wrap} pb-16`}>
      <h2 className={h2}>Fifteen commitments, each with a target</h2>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter commitments">
        {[{ id: "all", label: "All 15" }, ...cats].map((c) => (
          <button key={c.id} type="button" aria-pressed={f === c.id} onClick={() => setF(c.id)}
            className="rounded-full border-2 border-navy/20 px-4 py-1.5 font-medium aria-pressed:border-navy aria-pressed:bg-navy aria-pressed:text-white">
            {c.label}
          </button>
        ))}
      </div>
      <ol className="mt-6 border-t border-navy/15">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p) => (
            <motion.li key={p.n} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-navy/15 py-5">
              <span className="font-heading text-2xl font-extrabold text-royal">{String(p.n).padStart(2, "0")}</span>
              <div>
                <h3 className="font-heading text-xl font-extrabold text-navy">{p.t}</h3>
                <p className="mt-1 max-w-prose text-ink/75">{p.d}</p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
    </section>
  );
}

type Item = { label: string; target: string; done: number; goal: number };
export function Progress() {
  const [d, setD] = useState<{ updated: string; status: string; items: Item[] } | null>(null);
  useEffect(() => {
    fetch(`${base}/progress.json`, { cache: "no-store" }).then((r) => r.json()).then(setD).catch(() => {});
  }, []);
  const done = d?.items.reduce((s, i) => s + Math.min(i.done, i.goal), 0) ?? 0;
  const goal = d?.items.reduce((s, i) => s + i.goal, 0) ?? 0;
  const pct = goal ? Math.round((done / goal) * 100) : 0;
  return (
    <section id="progress" className="bg-sky py-16">
      <div className={wrap}>
        <h2 className={h2}>Progress tracker</h2>
        <p className="mt-3 max-w-prose text-lg">Every target from the manifesto, checked against what has actually happened.</p>
        {!d ? (
          <p className="mt-8">Loading progress…</p>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <p className="font-heading text-6xl font-extrabold text-navy">{pct}%</p>
              <p>{d.status} Last updated {d.updated}.</p>
            </div>
            <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {d.items.map((i) => {
                const p = Math.min(100, Math.round((i.done / i.goal) * 100));
                return (
                  <li key={i.label}>
                    <div className="flex justify-between gap-4 font-bold text-navy">
                      <span>{i.label}</span><span>{i.done}/{i.goal}</span>
                    </div>
                    <div role="progressbar" aria-label={i.label} aria-valuenow={p} aria-valuemin={0} aria-valuemax={100}
                      className="mt-1.5 h-3 overflow-hidden rounded-full bg-white">
                      <motion.div className="h-full rounded-full bg-royal" initial={{ width: 0 }}
                        whileInView={{ width: `${p}%` }} viewport={{ once: true }} transition={{ duration: 0.9 }} />
                    </div>
                    <p className="mt-1 text-sm text-ink/70">Target: {i.target}</p>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}

function HonorList({ title, items }: { title: string; items: Honor[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-8">
      <h3 className="font-heading text-2xl font-extrabold text-navy">{title}</h3>
      <ul className="mt-4 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((h) => (
          <li key={h.title} className="overflow-hidden rounded-xl border border-navy/15 bg-white">
            {h.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`${base}${h.image}`} alt={h.title} loading="lazy" className="w-full" />
            )}
            <div className="p-4">
              <p className="font-bold text-navy">{h.title}</p>
              <p className="text-sm text-ink/70">{[h.by, h.year].filter(Boolean).join(" · ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertList({ items }: { items: Honor[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-10">
      <h3 className="font-heading text-2xl font-extrabold text-navy">Certificates</h3>
      <ul className="mt-4 border-t border-navy/15">
        {items.map((c) => (
          <li key={c.title} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-navy/15 py-3">
            <div>
              <p className="font-bold text-navy">{c.title}</p>
              <p className="text-sm text-ink/70">{[c.by, c.year].filter(Boolean).join(" · ")}</p>
            </div>
            <p className="flex gap-4 text-sm font-bold text-royal">
              {c.image && <a href={`${base}${c.image}`} target="_blank" rel="noreferrer">View</a>}
              {c.url && <a href={c.url} target="_blank" rel="noreferrer">Verify</a>}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Research() {
  return (
    <section className={`${wrap} py-16`}>
      <h2 className={h2}>Research</h2>
      <p className="mt-3 max-w-prose text-lg">Five papers, with two more in progress.</p>
      <ul className="mt-6 border-t border-navy/15">
        {papers.map((p) => (
          <li key={p.title} className="grid gap-x-8 gap-y-2 border-b border-navy/15 py-5 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-heading text-xl font-extrabold text-navy">{p.title}</h3>
              <p className="mt-1 max-w-prose text-ink/75">{p.note}</p>
            </div>
            <p className="md:text-right">
              <span className="inline-block rounded-full bg-sky px-3 py-1 text-sm font-bold text-navy">{p.status}</span>
              <span className="mt-1 block text-sm text-ink/70">{p.venue}</span>
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 font-bold text-navy">In progress</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {ongoing.map((o) => (
          <li key={o} className="rounded-full border-2 border-navy/20 px-4 py-1.5 font-medium">{o}</li>
        ))}
      </ul>
    </section>
  );
}

export function Competitions() {
  return (
    <section className={`${wrap} pb-16`}>
      <h2 className={h2}>Competitions</h2>
      <p className="mt-3 max-w-prose text-lg">13 competitions on Kaggle, including datathons and global challenges. Two results:</p>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {competitions.map((c) => (
          <li key={c.title} className="rounded-xl border-2 border-navy/15 bg-white p-5">
            <p className="font-heading text-4xl font-extrabold text-royal">{c.result}</p>
            <p className="text-sm text-ink/70">{c.of}</p>
            <h3 className="font-heading mt-3 text-lg font-extrabold text-navy">{c.title}</h3>
            <p className="mt-1 text-sm text-ink/75">{c.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-prose text-ink/75">{alsoCompeted}</p>
    </section>
  );
}

export function Recognition() {
  return (
    <section className={`${wrap} py-16`}>
      <h2 className={h2}>Awards and certificates</h2>
      <p className="mt-3 max-w-prose text-lg">{learning}</p>
      <HonorList title="Awards" items={awards} />
      <CertList items={certificates} />
    </section>
  );
}

export function Poster() {
  return (
    <section className={`${wrap} grid items-center gap-10 py-16 md:grid-cols-[320px_1fr]`}>
      <a href={poster.src} target="_blank" rel="noreferrer">
        <Image src={poster} alt="Campaign poster: vote on 29 October, symbol RAM" className="w-full rounded-xl shadow-xl" />
      </a>
      <div>
        <h2 className={h2}>Look for the RAM</h2>
        <p className="mt-4 max-w-prose text-lg">On the ballot, my symbol is RAM. Stronger community, more opportunities, better events, skill development.</p>
      </div>
    </section>
  );
}

export function Events() {
  return (
    <section className={`${wrap} pb-16`}>
      <h2 className={h2}>The club in action</h2>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {events.map((e) => (
          <li key={e.title}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${base}${e.image}`} alt={e.title} loading="lazy" className="w-full rounded-xl" />
            <p className="mt-2 font-bold text-navy">{e.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Profiles() {
  return (
    <section className={`${wrap} pb-16`}>
      <h2 className={h2}>Find my work</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((p) => {
          const body = (
            <>
              <span className="block font-heading text-lg font-extrabold text-navy">{p.label}</span>
              {p.stat && <span className="block font-heading text-4xl font-extrabold text-royal">{p.stat}</span>}
              <span className="block text-sm text-ink/70">{p.note}</span>
              {p.handle && <span className="mt-1 block truncate text-sm font-medium">{p.handle}</span>}
            </>
          );
          const cls = "block h-full rounded-xl border-2 border-navy/15 bg-white p-4";
          return (
            <li key={p.label}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer" className={`${cls} transition-colors hover:border-royal`}>{body}</a>
              ) : (
                <div className={cls}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function Vote() {
  const [mail, setMail] = useState("");
  useEffect(() => setMail(emailParts.join("@")), []); // set after load so scrapers don't see it in the HTML
  return (
    <footer className="bg-navy py-14 text-center text-white">
      <div className={wrap}>
        <p className="font-heading text-3xl font-extrabold md:text-5xl">Vote Md Abdullah Al Mamun</p>
        <p className="mt-3 text-lg text-sky/90">General Secretary, 4th Committee · Symbol: RAM · 29 October</p>
        {mail && (
          <a href={`mailto:${mail}`} className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-bold text-navy">
            Email me: {mail}
          </a>
        )}
        <SymbolCard className="mx-auto mt-8 w-56" />
      </div>
    </footer>
  );
}
