"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Event design & décor",
    text: "A complete décor concept for your celebration, including the color story, layout, key moments, materials, and finishing details.",
  },
  {
    number: "02",
    title: "Backdrops & installations",
    text: "Custom focal points for ceremonies, sweetheart tables, entrances, photo moments, and milestone celebrations.",
  },
  {
    number: "03",
    title: "Tablescapes & styling",
    text: "Linens, candlelight, place settings, florals, and decorative details styled into an inviting guest experience.",
  },
  {
    number: "04",
    title: "Custom details & signage",
    text: "Welcome signs, seating displays, menus, place cards, and personalized details designed to complete the look.",
  },
];

const steps = [
  ["01", "Inquire", "Share your date, venue, guest count, décor needs, and the feeling you want for your day."],
  ["02", "Consult", "We talk through your vision, priorities, inspiration, and anticipated décor investment."],
  ["03", "Design", "We create a custom décor direction with a cohesive palette, materials, and statement moments."],
  ["04", "Celebrate", "Our team installs and styles every detail, then returns for breakdown after your event."],
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
        <div className="hero-art" aria-label="Sculptural ivory, oxblood, and brass event backdrop">
          <div className="hero-image" />
          <span className="image-index">No. 01 — The opening scene</span>
        </div>
        <p className="hero-copy reveal">
          Luxury event décor for weddings and milestone celebrations,
          thoughtfully designed for life’s most meaningful moments.
        </p>
        <div className="hero-footer">
          <span>Dallas · DMV · Beyond</span>
          <span>Event décor&nbsp;&nbsp;•&nbsp;&nbsp;Backdrops&nbsp;&nbsp;•&nbsp;&nbsp;Tablescapes&nbsp;&nbsp;•&nbsp;&nbsp;Custom signage</span>
        </div>
      </section>

      <section className="intro section-pad">
        <p className="section-label">Your celebration, elevated</p>
        <div className="intro-grid">
          <h2>Your vision,<br /><em>beautifully brought to life.</em></h2>
          <div>
            <p>
              From your ceremony backdrop to the final place setting, we create
              polished, personalized décor that makes your special day feel
              cohesive, luxurious, and completely your own.
            </p>
            <button className="text-link" onClick={openInquiry}>Tell us about your event <span>↗</span></button>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <p className="section-label">Our services</p>
          <p className="section-note">Custom proposals based on your celebration</p>
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

      <section className="image-story">
        <div className="backdrop-image" role="img" aria-label="Extravagant fully draped wedding reception with wrapped dance floor and mixed tables" />
        <div className="story-copy">
          <p className="section-label">Décor that feels like you</p>
          <h2>Beautiful from every angle.<br /><em>Meaningful in every detail.</em></h2>
          <p>
            We transform venues into welcoming, elevated settings that reflect
            your style and make the people you love feel part of something special.
          </p>
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="section-heading">
          <p className="section-label">How it unfolds</p>
          <p className="section-note">Clear guidance from your first idea through event day</p>
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
          <h2>Design experience,<br /><em>devoted to your special day.</em></h2>
          <p>
            Founded by Mar, Martelier brings a background in graphic and
            experience design to luxury event décor. That trained eye shapes
            everything—from the overall atmosphere to the smallest custom
            detail—so your celebration feels polished, personal, and memorable.
          </p>
        </div>
      </section>

      <section className="closing section-pad">
        <p className="section-label">Weddings · Milestones · Intimate celebrations</p>
        <h2>Let’s make your day<br /><em>feel extraordinary.</em></h2>
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
