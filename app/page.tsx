"use client";

import React, { useRef, useEffect, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

const setlist = [
"I Shot The Sheriff - Eric Clapton",
  "Fortune Faded - Red Hot Chili Peppers",
  "Salvation - Cranberries",
  "Burnin' For You - Blue Öyster Cult",
  "Modern Love - David Bowie",
  "Good Times Bad Times - Led Zeppelin",
  "Fortunate Son - Creedence Clearwater Revival",
  "So Lonely - The Police",
  "Deeper Underground - Jamiroquai",
  "Love Song - 311",
  "Evidence - Faith No More",
  "B.O.O.T. - Pepper",
  "Poison Heart - Ramones",
  "I'll Hate You Better - Suicidal Tendencies",
  "3's & 7's - Queens Of The Stone Age",
  "Trippin’ on a Hole in a Paper Heart - Stone Temple Pilots",
  "Forest - System Of A Down",
  "Them Bones - Alice in Chains",
  "Outshined - Soundgarden",
  "The Lost Art of Keeping A Secret - Queens Of The Stone Age",
  "State Of Love And Trust - Pearl Jam",
  "Stray Cat Strut - Stray Cats",
  "Wrong Way - Sublime",
  "No Control - Pepper",
  "Me Lambe - Raimundos",
  "Ilê Aye - O Rappa",
  "Rogues - Incubus",
  "Again - Alice in Chains",
  "Midlife Crisis - Faith No More",
  "Sunday Morning - No Doubt",
  "Valerie - Amy Winehouse",
  "One Way or Another - Blondie",
  "Toys and Flavors - The Hellacopters",
  "Search And Destroy - Iggy Pop - The Stooges",
  "Roxanne - The Police",
  "Blood Sugar Sex Magik - Red Hot Chili Peppers",
  "Strength to Endure - Ramones",
  "You - Bad Religion",
  "Rebel Yell - Billy Idol",
  "X-Ray Visions - Clutch"
];

const members = [
  { name: "Dalton", role: "Vocal", pic: "/images/dalton-quadrado.png"},
  { name: "Luiz Sanchez", role: "Guitarra", pic: "/images/luizinho-quadrado.png" },
  { name: "Tiago Correia", role: "Guitarra", pic: "/images/tiago-quadrado.png" },
  { name: "Grote", role: "Baixo" , pic: "/images/grote-quadrado.png"},
  { name: "Rico", role: "Bateria (Superchiadeira)", pic: "/images/rico-quadrado.png" },
];

function ParallaxHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll parallax (Y)
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0vh", "-30vh"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["0vh", "-45vh"]);

  // Mouse parallax (X/Y)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xSlow = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const ySlowMouse = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);
  const xMid = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const yMidMouse = useTransform(mouseY, [-0.5, 0.5], [-18, 18]);
  const xFast = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const yFastMouse = useTransform(mouseY, [-0.5, 0.5], [-28, 28]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = Math.max(-0.5, Math.min(0.5, (e.clientX - cx) / rect.width));
    const ny = Math.max(-0.5, Math.min(0.5, (e.clientY - cy) / rect.height));
    mouseX.set(nx);
    mouseY.set(ny);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scaleTitle = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacityTitle = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[100svh] overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* background layers */}
      <motion.div style={{ y: ySlow, x: xSlow }} className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-[#0f0f0f] to-black" />
      <motion.div aria-hidden style={{ y: yMid, x: xMid, opacity: 0.15 }} className="absolute inset-0 mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:3px_3px]" />
      </motion.div>
      <motion.div style={{ y: yFast, x: xFast, rotate: -1 }} className="absolute -left-16 -top-16 h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-orange-600/20 to-transparent blur-2xl" />
      <motion.div style={{ y: yMid, x: xMid, rotate: 2 }} className="absolute -right-24 bottom-0 h-[50vh] w-[50vh] rounded-full bg-gradient-to-tr from-orange-500/10 to-transparent blur-2xl" />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1 style={{ scale: scaleTitle, opacity: opacityTitle, x: xSlow, y: ySlowMouse }} className="text-5xl font-extrabold tracking-wider text-white drop-shadow md:text-7xl">
          MANO DJANGO
        </motion.h1>
        <motion.p style={{ opacity: opacityTitle, x: xSlow, y: ySlowMouse }} className="mt-4 text-lg text-zinc-300 md:text-xl">
          Rock cru. Sem maquiagem. Sem concessões.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#setlist" className="rounded-2xl bg-orange-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-500">Ver Repertório</a>
          <a href="#contato" className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-200 hover:border-zinc-500">Agendar Show</a>
        </div>

        <motion.div initial={{ y: 0, opacity: 0.7 }} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 text-xs uppercase tracking-widest text-zinc-400">
          role para ver mais
        </motion.div>
      </div>
    </section>
  );
}

function RevealSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-8 text-center text-3xl font-extrabold tracking-wide text-orange-500 md:text-4xl">
        {title}
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-zinc-200/90">
        {children}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-20">
        <svg viewBox="0 0 1440 80" className="h-full w-full fill-black/60">
          <path d="M0,64 C240,16 480,16 720,64 C960,112 1200,112 1440,64 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <RevealSection id="manifesto" title="Manifesto">
      <div className="mx-auto max-w-3xl text-center leading-relaxed text-zinc-300">
        <p>
          O Mano Django é a soma de cinco trajetórias com a mesma urgência: tocar o rock do jeito que a gente sente. Do hardcore ao funk/soul, do metal ao reggae, do underground brasileiro ao stoner. No palco, isso vira energia coletiva: riffs pesados, groove sujo, vocal entre o melódico e o rasgado e bateria com mão pesada.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-zinc-400 md:grid-cols-5">
          <p className="italic">“Viver intensamente.” — Dalton</p>
          <p className="italic">“Sintonia e potencial.” — Luiz</p>
          <p className="italic">“Peso e liberdade.” — Tiago</p>
          <p className="italic">“Amizade em som.” — Grote</p>
          <p className="italic">“Elo de amigos.” — Rico</p>
        </div>
      </div>
    </RevealSection>
  );
}

function Integrantes() {
  return (
    <RevealSection id="integrantes" title="Integrantes">
      <div className="grid gap-6 md:grid-cols-5">
        {members.map((m) => (
          <motion.div key={m.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-xl">
            <div className="mb-3 w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" >
              <Image
                src={m.pic}
                alt={m.name}
                width={150}
                height={150}
                className="h-full w-full object-cover rounded-xl"/>
            </div>
            <h3 className="text-lg font-bold text-white">{m.name}</h3>
            <p className="text-sm text-zinc-400">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}

function Setlist() {
  return (
    <RevealSection id="setlist" title="Repertório">
      <div className="mx-auto max-w-3xl">
        <ul className="grid gap-2 text-zinc-300 md:grid-cols-2">
          {setlist.map((s, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: (i % 8) * 0.03 }} className="rounded-md border border-zinc-800/60 bg-zinc-900/40 px-3 py-2">
              {s}
            </motion.li>
          ))}
        </ul>
      </div>
    </RevealSection>
  );
}

function Contato() {
  return (
    <RevealSection id="contato" title="Contato">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-zinc-400">Para shows e press:</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a 
            href="mailto:manodjangoband@gmail.com" 
            className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            manodjangoband@gmail.com
          </a>

          <a 
            href="https://instagram.com/mano_django" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@mano_django</span>
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

function StickyNav() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useSpring(useTransform(scrollYProgress, [0, 0.1], [0, 1]), { stiffness: 120, damping: 20 });
  const bgColor = useTransform(bgOpacity, (o) => `rgba(0,0,0,${o * 0.75})`);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.nav style={{ backgroundColor: bgColor, scale }} className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-zinc-800/70 px-4 py-2 backdrop-blur">
      <ul className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-300">
        <li><a href="#home" className="hover:text-white">Home</a></li>
        <li><a href="#manifesto" className="hover:text-white">Manifesto</a></li>
        <li><a href="#integrantes" className="hover:text-white">Integrantes</a></li>
        <li><a href="#setlist" className="hover:text-white">Repertório</a></li>
        <li><a href="#contato" className="hover:text-white">Contato</a></li>
      </ul>
    </motion.nav>
  );
}

// Dev sanity checks
function DevSmokeTests() {
  useEffect(() => {
    try {
      console.assert(Array.isArray(setlist) && setlist.length > 0, "[TEST] Setlist vazio");
      console.assert(Array.isArray(members) && members.length === 5, "[TEST] Integrantes incompletos");
      ["home", "manifesto", "integrantes", "setlist", "contato"].forEach((id) => {
        const el = document.getElementById(id);
        console.assert(!!el, `[TEST] Seção não encontrada: ${id}`);
      });
      console.debug("[TEST] DevSmokeTests OK");
    } catch (e) {
      console.error("[TEST] DevSmokeTests FAIL:", e);
    }
  }, []);
  return null;
}

export default function Page() {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0, 0.5, 1], ["#0a0a0a", "#0e0e0e", "#0a0a0a"]);

  return (
    <motion.main style={{ backgroundColor: bg }} className="min-h-[100svh] text-white">
      <StickyNav />
      <ParallaxHero />
      <Manifesto />
      <Integrantes />
      <Setlist />
      <Contato />
      <DevSmokeTests />
      <footer className="border-t border-zinc-800/60 px-6 py-10 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Mano Django — manodjango.com.br</footer>
    </motion.main>
  );
}
