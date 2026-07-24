"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Event design",
    text: "A cohesive visual world shaped around your celebration—from the first concept to the final detail.",
  },
  {
    number: "02",
    title: "Statement backdrops",
    text: "Sculptural focal moments designed for ceremonies, portraits, entrances, and unforgettable reveals.",
  },
  {
    number: "03",
    title: "Tablescapes",
    text: "Layered linens, florals, candlelight, place settings, and finishing details composed as one.",
  },
];

const steps = [
  ["01", "Inquire", "Tell us what you’re celebrating, where, and how you want it to feel."],
  ["02", "Discover", "We meet, listen, and define the atmosphere, priorities, and investment."],
  ["03", "Compose", "Your custom concept takes shape through materials, color, form, and detail."],
  ["04", "Transform", "We install, style, and refine the setting so you can simply arrive."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = inquiryOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [inquiryOpen]);

  function openInquiry() {
    setMenuOpen(false);
    setSubmitted(false);
    setInquiryOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Martelier home">
          Martelier
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <button className="inquiry-link" onClick={openInquiry}>Start an inquiry</button>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal">Luxury event design &amp; décor</div>
        <h1 className="hero-title">
          <span className="reveal">Where occasions</span>
          <span className="hero-title-italic reveal">become atmosphere.</span>
        </h1>
        <div className="hero-art" aria-label="Editorial tablescape in oxblood, ivory, and brass">
          <div className="hero-image" />
          <span className="image-index">No. 01 — The opening scene</span>
        </div>
        <p className="hero-copy reveal">
          Martelier creates artfully composed environments for weddings,
          milestone celebrations, and intimate gatherings.
        </p>
        <div className="hero-footer">
          <span>New York · Beyond</span>
          <span>Event design&nbsp;&nbsp;•&nbsp;&nbsp;Backdrops&nbsp;&nbsp;•&nbsp;&nbsp;Tablescapes</span>
        </div>
      </section>

      <section className="intro section-pad">
        <p className="section-label">The Martelier perspective</p>
        <div className="intro-grid">
          <h2>Not simply decorated.<br /><em>Entirely considered.</em></h2>
          <div>
            <p>
              We approach every occasion as a composition—balancing color,
              texture, scale, and light to create an experience that feels
              unmistakably yours.
            </p>
            <button className="text-link" onClick={openInquiry}>Tell us what you’re imagining <span>↗</span></button>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <p className="section-label">Our services</p>
          <p className="section-note">Selected individually or composed together</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-arch">
          <span>Considered down to the last detail</span>
          <h2>We set the scene.<br /><em>You live the moment.</em></h2>
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="section-heading">
          <p className="section-label">How it unfolds</p>
          <p className="section-note">A thoughtful process, from first idea to final reveal</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-mark">M</div>
        <div className="about-copy">
          <p className="section-label">Meet the founder</p>
          <h2>A designer’s eye,<br /><em>turned toward celebration.</em></h2>
          <p>
            Founded by Mar, Martelier brings a background in graphic and
            experience design to the world of events. Every environment begins
            with a story, then takes form through proportion, texture, rhythm,
            and feeling.
          </p>
        </div>
      </section>

      <section className="closing section-pad">
        <p className="section-label">Now accepting select celebrations</p>
        <h2>Let’s create the<br /><em>atmosphere.</em></h2>
        <button className="primary-button" onClick={openInquiry}>Start an inquiry <span>↗</span></button>
      </section>

      <footer>
        <a className="wordmark" href="#top">Martelier</a>
        <p>Luxury event design &amp; décor</p>
        <div>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <button onClick={openInquiry}>Inquire</button>
        </div>
        <span>© 2026 Martelier</span>
      </footer>

      <div
        className={inquiryOpen ? "inquiry-overlay is-open" : "inquiry-overlay"}
        aria-hidden={!inquiryOpen}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setInquiryOpen(false);
        }}
      >
        <section className="inquiry-panel" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
          <button className="close-button" onClick={() => setInquiryOpen(false)} aria-label="Close inquiry form">×</button>
          {submitted ? (
            <div className="form-success">
              <span>Inquiry composed</span>
              <h2>Thank you.<br /><em>This is the beginning.</em></h2>
              <p>
                Your preview form is working beautifully. Before the public
                launch, we’ll connect it to your business email so every
                inquiry reaches you directly.
              </p>
              <button className="primary-button" onClick={() => setInquiryOpen(false)}>Return to Martelier</button>
            </div>
          ) : (
            <>
              <p className="section-label">Start an inquiry</p>
              <h2 id="inquiry-title">Tell us about<br /><em>the occasion.</em></h2>
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <label>First name<input name="firstName" required /></label>
                  <label>Last name<input name="lastName" required /></label>
                </div>
                <label>Email address<input type="email" name="email" required /></label>
                <div className="field-row">
                  <label>Event type
                    <select name="eventType" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Wedding</option>
                      <option>Milestone celebration</option>
                      <option>Intimate gathering</option>
                      <option>Brand event</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>Event date<input type="date" name="date" /></label>
                </div>
                <label>Estimated décor investment
                  <select name="budget" required defaultValue="">
                    <option value="" disabled>Select a range</option>
                    <option>$3,000–$5,000</option>
                    <option>$5,000–$10,000</option>
                    <option>$10,000–$20,000</option>
                    <option>$20,000+</option>
                  </select>
                </label>
                <label>What are you envisioning?<textarea name="vision" rows={4} required /></label>
                <button className="primary-button" type="submit">Send inquiry <span>↗</span></button>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
