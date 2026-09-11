'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Code2, Globe2, Menu, Network, ShieldCheck, Sparkles, X } from 'lucide-react'

const solutions = [
  { icon: Code2, title: 'Enterprise Software Development', text: 'End-to-end engineering of bespoke platforms, high-throughput microservices, API integrations, and distributed cloud backends built to sustain intensive business-critical workflows and high concurrency.' },
  { icon: Globe2, title: 'B2B & B2C White-Label Solutions', text: 'Turnkey multi-tenant digital applications customizable with custom domain mapping (CNAME), dynamic theme injection, isolated role hierarchies, and integrated billing modules for immediate go-to-market.' },
  { icon: ShieldCheck, title: 'Cybersecurity & Architecture Protection', text: 'Comprehensive defensive architectures featuring zero-trust networks, automated vulnerability scans, mTLS authentication, end-to-end data encryption, and institutional threat monitoring.' },
  { icon: Network, title: 'Technology Consulting & Modernization', text: 'Strategic advisory evaluating cloud migration roadmaps, legacy decoupling, technical debt reduction, cost governance, and scalable software architecture formulation for growing enterprises.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Integra Global home">
          <span className="brand-mark">I</span>
          <span><strong>INTEGRA GLOBAL</strong><small>INDUSTRIES LIMITED</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about">About</a><a href="#solutions">Solutions</a><a href="#white-label">White-Label</a><a href="#solutions">Cybersecurity</a><a href="#contact">Consulting</a>
          <a className="button button-small" href="#contact">Demo</a>
        </nav>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="eyebrow"><span /> ENTERPRISE SOFTWARE &amp; WHITE-LABEL ARCHITECTURE</div>
        <h1>Modular Enterprise Software &amp;<br /><em>Turnkey White-Label Solutions</em></h1>
        <p>Integra Global Industries Limited designs, builds, and maintains mission-critical software systems.<br className="desktop-only" /> From custom B2B/B2C white-label platforms to enterprise-grade cybersecurity and technology consulting.</p>
        <div className="hero-actions"><a className="button" href="#solutions">Explore Solutions <ArrowRight size={16} /></a><a className="button button-ghost" href="#contact">Schedule Review</a></div>
      </section>

      <section id="about" className="overview section-wrap">
        <div className="overview-copy"><div className="section-label">EXECUTIVE OVERVIEW</div><h2>High Concurrency, Isolation &amp; Total Rebrandability</h2><p>Integra Global Industries Limited bridges technical product innovation and corporate security. We engineer backends that manage intensive business workloads alongside front-facing interfaces that partners can brand and deploy to market with zero friction.</p><div className="stat-row"><div><strong>Multi-Tenant</strong><span>ISOLATED DATA PLANES</span></div><div><strong>Zero-Trust</strong><span>END-TO-END DEFENSE</span></div></div></div>
        <div className="standards-card"><div className="card-heading"><span className="icon-box"><ShieldCheck size={19} /></span><h3>Architectural &amp; Code Standards</h3></div><p>Every product framework functions under strict multi-tenant isolation, automated code testing, and rigorous vulnerability mitigation ensuring seamless platform resilience.</p><ul>{['Production-Ready Event-Driven Microservices','Automated Migration & Multi-Tenant Partitioning','Full-Lifecycle Vulnerability Tracking & Hardening'].map(item => <li key={item}><span><Check size={12} /></span>{item}</li>)}</ul></div>
      </section>

      <section id="solutions" className="solutions section-wrap"><div className="section-intro"><div className="section-label">CORE CAPABILITIES</div><h2>Our Enterprise Solutions</h2><p>Modular software products and consulting frameworks designed for commercial scale.</p></div><div className="solution-grid">{solutions.map(({ icon: Icon, title, text }) => <article className="solution-card" key={title}><div className="icon-box"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="white-label" className="architecture section-wrap"><div className="architecture-copy"><div className="section-label light">WHITE-LABEL DEPLOYMENT ARCHITECTURE</div><h2>Modular Multi-Tenant SaaS Engine</h2><p>Launch fully-branded B2B client management portals or consumer applications with isolated data layers, unified billing integration, and production-grade security defaults.</p></div><div className="architecture-points"><div><strong>Custom Branding</strong><span>Domain (CNAME) &amp; styling</span></div><div><strong>Data Sovereignty</strong><span>Isolated multi-tenant schemas</span></div><div><strong>Extensible APIs</strong><span>Webhooks &amp; payment rails</span></div></div></section>

      <section id="contact" className="contact section-wrap"><div className="section-intro"><div className="section-label">TECHNICAL ENGAGEMENTS</div><h2>Request Platform Demo or Architecture Review</h2></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success-message"><Check size={25} /><h3>Request received</h3><p>Our technical team will be in touch shortly.</p><button type="button" className="button button-ghost" onClick={() => setSubmitted(false)}>Send another request</button></div> : <><div className="form-row"><input required aria-label="Full Name" placeholder="Full Name" /><input required type="email" aria-label="Corporate Email" placeholder="Corporate Email" /></div><label className="select-wrap"><select aria-label="Scope"><option>Scope: Enterprise Software / B2B White-Label / B2C App / Security &amp; Advisory</option><option>Enterprise Software Development</option><option>White-Label Platform</option><option>Cybersecurity &amp; Advisory</option></select><ChevronDown size={16} /></label><button className="button submit-button" type="submit">Submit Technical Scope Request <ArrowRight size={16} /></button></>}</form></section>

      <footer className="site-footer section-wrap"><span>© 2026 Integra Global Industries Limited. All rights reserved.</span><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a><a href="#solutions">Compliance</a></div></footer>
    </main>
  )
}
