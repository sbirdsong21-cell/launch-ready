"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Building2, Landmark, FileText, ShieldCheck, Search,
  CheckCircle2, Sparkles, Users, Wand2, CircleDollarSign, CalendarCheck,
  Mail, ChevronRight, Menu, X, Rocket, Upload, Star, LayoutDashboard
} from "lucide-react";

function Button({ children, className = "", variant = "solid", size = "md", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline"; size?: "md" | "lg" }) {
  const base = "inline-flex items-center justify-center font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300";
  const sizes = size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm";
  const styles = variant === "outline" ? "border border-white/20 bg-white/5 text-white hover:bg-white/10" : "bg-emerald-400 text-slate-950 hover:bg-emerald-300";
  return <button className={`${base} ${sizes} ${styles} ${className}`} {...props}>{children}</button>;
}

const features = [
  { icon: Building2, title: "LLC Formation", text: "Guided state-by-state filing support, formation tracking, and entity setup." },
  { icon: FileText, title: "EIN & Legal Documents", text: "Operating agreements, ownership records, resolutions, and EIN guidance in one place." },
  { icon: Landmark, title: "Business Banking", text: "Recommended banking partners and setup checklist to separate personal and business finances." },
  { icon: Wand2, title: "AI Startup Studio", text: "Generate business plans, pitch decks, lender packets, executive summaries, and market positioning." },
  { icon: ShieldCheck, title: "Compliance Manager", text: "Annual report reminders, registered agent services, beneficial ownership tracking, and renewal alerts." },
  { icon: Search, title: "Funding Marketplace", text: "Match with lenders, investors, grants, and accelerators based on readiness and business profile." }
];

const checklist = [
  { label: "LLC formed", done: true },
  { label: "EIN obtained", done: true },
  { label: "Operating agreement generated", done: true },
  { label: "Business bank account connected", done: true },
  { label: "Pitch deck completed", done: true },
  { label: "Lender packet reviewed", done: false },
  { label: "Investor profile published", done: false }
];

const fundingMatches = [
  { name: "Startup Working Capital Loan", type: "Lender", fit: "92% match", range: "$25k - $150k" },
  { name: "Founder-Friendly Angel Network", type: "Investor", fit: "84% match", range: "$50k - $500k" },
  { name: "New Business Grant Finder", type: "Grant", fit: "78% match", range: "$5k - $25k" }
];

const aiOutputs = ["Executive Summary", "Investor Pitch Deck", "12-Month Launch Plan", "Use of Funds Statement", "Market Opportunity Brief", "Lender Readiness Packet"];

const pricing = [
  { name: "Start", price: "$149", detail: "LLC formation package", items: ["Formation checklist", "Operating agreement", "EIN guidance", "Company profile"] },
  { name: "Grow", price: "$39/mo", detail: "Compliance + startup tools", items: ["Compliance dashboard", "Document vault", "AI business plan", "Banking setup"] },
  { name: "Fund", price: "$99/mo", detail: "Funding readiness suite", items: ["Pitch deck builder", "Funding marketplace", "Investor profile", "Lender packet"] }
];

function DashboardPreview() {
  const completed = checklist.filter((item) => item.done).length;
  const score = Math.round((completed / checklist.length) * 100);
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-emerald-950/40 backdrop-blur-xl sm:p-7">
      <div className="rounded-3xl bg-slate-950/90 p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Funding Readiness Score</p>
            <h3 className="text-4xl font-bold text-white">{score}%</h3>
          </div>
          <div className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm text-emerald-300">Demo Company</div>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-800">
          <motion.div initial={{ width: 0 }} animate={{ width: `${score}%` }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-emerald-400" />
        </div>
        <div className="mt-6 space-y-3">
          {checklist.map((item, index) => (
            <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
              <CheckCircle2 className={`h-5 w-5 ${item.done ? "text-emerald-400" : "text-slate-600"}`} />
              <span className="text-sm text-slate-200">{item.label}</span>
              <span className="ml-auto text-xs text-slate-500">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppScreen({ active }: { active: string }) {
  if (active === "Dashboard") {
    return (
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3"><LayoutDashboard className="h-6 w-6 text-emerald-600" /><h3 className="text-xl font-bold">Founder Dashboard</h3></div>
          <p className="mt-3 text-slate-600">Track every step from formation to funding readiness.</p>
          <div className="mt-6 space-y-4">
            {[["Launch Completion", "71%", "w-[71%]", "bg-emerald-500"], ["Investor Readiness", "64%", "w-[64%]", "bg-slate-950"], ["Compliance Health", "90%", "w-[90%]", "bg-emerald-500"]].map(([label, value, width, color]) => (
              <div key={label}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><span>{value}</span></div><div className="h-3 rounded-full bg-slate-100"><div className={`h-3 rounded-full ${width} ${color}`} /></div></div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-xl font-bold">Next Best Actions</h3>
          <div className="mt-5 space-y-3">
            {["Upload business bank confirmation", "Review generated lender packet", "Publish investor visibility profile"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"><span>{item}</span><ChevronRight className="h-5 w-5 text-slate-400" /></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (active === "AI Studio") {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-3"><Wand2 className="h-6 w-6 text-emerald-600" /><h3 className="text-xl font-bold">AI Startup Studio</h3></div>
        <p className="mt-3 text-slate-600">Founder inputs become polished business documents and pitch materials.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aiOutputs.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-medium">{item}</div>)}
        </div>
        <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
          <p className="text-sm text-slate-400">Prompt Example</p>
          <p className="mt-2">Create a lender-ready business plan for a Texas-based mobile detailing company seeking $75,000 in startup capital.</p>
        </div>
      </div>
    );
  }

  if (active === "Funding") {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-3"><CircleDollarSign className="h-6 w-6 text-emerald-600" /><h3 className="text-xl font-bold">Funding Marketplace</h3></div>
        <p className="mt-3 text-slate-600">Match founders with capital options after their company profile is complete.</p>
        <div className="mt-6 space-y-4">
          {fundingMatches.map((match) => (
            <div key={match.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div><h4 className="font-bold">{match.name}</h4><p className="text-sm text-slate-500">{match.type} • {match.range}</p></div>
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">{match.fit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3"><CalendarCheck className="h-6 w-6 text-emerald-600" /><h3 className="text-xl font-bold">Compliance Center</h3></div>
      <p className="mt-3 text-slate-600">Keep founders active, organized, and renewal-ready after formation.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["Annual report due in 48 days", "Registered agent active", "Document vault complete"].map((item) => (
          <div key={item} className="rounded-2xl bg-slate-50 p-5"><ShieldCheck className="mb-3 h-6 w-6 text-emerald-600" /><p className="font-medium">{item}</p></div>
        ))}
      </div>
    </div>
  );
}

export default function LaunchReadyConcept() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const tabs = useMemo(() => ["Dashboard", "AI Studio", "Funding", "Compliance"], []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/20"><Sparkles className="h-5 w-5" /></div>
            <span className="text-xl font-bold tracking-tight">Launch Ready</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#funding" className="hover:text-white">Funding</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <div className="hidden gap-3 md:flex"><Button variant="outline" className="rounded-full">Log In</Button><Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200">Start Free</Button></div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/10 px-6 py-4 md:hidden"><div className="flex flex-col gap-4 text-slate-300"><a href="#platform">Platform</a><a href="#demo">Demo</a><a href="#funding">Funding</a><a href="#pricing">Pricing</a></div></div>}
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-20 sm:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"><Rocket className="h-4 w-4" /> The business launch platform for funding-ready founders</div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">Start the business. Build credibility. Get ready for capital.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Launch Ready goes beyond LLC formation by combining entity setup, EIN guidance, banking, documents, compliance, AI business planning, pitch decks, and funding visibility into one platform.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Button size="lg" className="rounded-full">View Founder Demo <ArrowRight className="ml-2 h-5 w-5" /></Button><Button size="lg" variant="outline" className="rounded-full">Pitch Partner Portal</Button></div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-center"><div><p className="text-2xl font-bold">7</p><p className="text-xs text-slate-400">Launch steps</p></div><div><p className="text-2xl font-bold">3</p><p className="text-xs text-slate-400">Revenue tiers</p></div><div><p className="text-2xl font-bold">1</p><p className="text-xs text-slate-400">Founder hub</p></div></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}><DashboardPreview /></motion.div>
          </div>
        </section>

        <section id="platform" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">The Platform</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">A complete launch ecosystem, not just an LLC filing service.</h2><p className="mt-5 text-lg text-slate-300">The core pitch: competitors help people form companies. Launch Ready helps founders become credible, organized, and fundable.</p></div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map((feature) => { const Icon = feature.icon; return <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 transition hover:bg-white/[0.09]"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold text-white">{feature.title}</h3><p className="mt-3 leading-7 text-slate-300">{feature.text}</p></div>; })}</div>
          </div>
        </section>

        <section id="demo" className="bg-white px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Interactive Product Concept</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Founder portal preview</h2><p className="mt-4 max-w-3xl text-lg text-slate-600">Use these tabs during your pitch to show what the fully built website could feel like.</p></div><div className="flex flex-wrap gap-2">{tabs.map((tab) => <button key={tab} onClick={() => setActive(tab)} className={`rounded-full px-5 py-3 text-sm font-semibold transition ${active === tab ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>{tab}</button>)}</div></div>
            <AppScreen active={active} />
          </div>
        </section>

        <section id="funding" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Why It Wins</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The product creates value after formation.</h2><p className="mt-5 text-lg leading-8 text-slate-300">Most formation companies monetize the filing event. Launch Ready creates an ongoing relationship through compliance, document management, AI tools, banking referrals, and funding opportunities.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Higher recurring revenue", "Stronger founder retention", "Bank and lender partnerships", "Investor-ready data profiles"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"><Star className="h-5 w-5 text-emerald-300" /><span>{item}</span></div>)}</div></div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8"><div className="mb-6 flex items-center gap-3"><Users className="h-7 w-7 text-emerald-300" /><h3 className="text-2xl font-bold text-white">Investor Visibility Profile</h3></div><div className="space-y-4 text-slate-300">{["Company overview and market opportunity", "Founder profile and ownership structure", "Business plan and funding use case", "Compliance and document status", "Pitch deck and lender packet"].map((item) => <div key={item} className="rounded-2xl bg-white/5 p-4">{item}</div>)}</div></div>
          </div>
        </section>

        <section id="pricing" className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Revenue Model</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Formation fees plus recurring SaaS revenue.</h2></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">{pricing.map((plan) => <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7"><h3 className="text-2xl font-bold text-white">{plan.name}</h3><p className="mt-3 text-4xl font-bold text-emerald-300">{plan.price}</p><p className="mt-2 text-slate-400">{plan.detail}</p><div className="mt-6 space-y-3">{plan.items.map((item) => <div key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-300" /><span className="text-slate-200">{item}</span></div>)}</div></div>)}</div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-emerald-400 p-10 text-center text-slate-950 shadow-2xl shadow-emerald-950/30 sm:p-16"><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Pitch the future of business formation.</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-800">Launch Ready is positioned as the bridge between starting a company and becoming fundable.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button size="lg" className="rounded-full bg-slate-950 text-white hover:bg-slate-800"><Upload className="mr-2 h-5 w-5" /> Founder Onboarding</Button><Button size="lg" variant="outline" className="rounded-full border-slate-950 text-slate-950 hover:bg-emerald-300"><Mail className="mr-2 h-5 w-5" /> Contact Sales</Button></div></div>
        </section>
      </main>
    </div>
  );
}
