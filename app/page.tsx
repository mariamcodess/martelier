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
  const [mailingOpen, setMailingOpen] = useState(false);
  const [mailingJoined, setMailingJoined] = useState(false);

  useEffect(() => {
    document.body.style.overflow = inquiryOpen || mailingOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [inquiryOpen, mailingOpen]);

  useEffect(() => {
    if (window.sessionStorage.getItem("martelier-mailing-seen")) return;

    const timer = window.setTimeout(() => setMailingOpen(true), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  function openInquiry() {
    setMenuOpen(false);
    setMailingOpen(false);
    setSubmitted(false);
    setInquiryOpen(true);
  }

  function closeMailing() {
    window.sessionStorage.setItem("martelier-mailing-seen", "true");
    setMailingOpen(false);
  }

  function handleMailingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.sessionStorage.setItem("martelier-mailing-seen", "true");
    setMailingJoined(true);
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
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="mobile-nav-inquiry" onClick={openInquiry}>Start an inquiry</button>
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
          <span className="reveal">Your vision,</span>
          <span className="hero-title-italic reveal">beautifully brought to life.</span>
        </h1>
        <div className="hero-art" aria-label="Sculptural ivory, oxblood, and brass event backdrop">
          <div className="hero-image" />
        </div>
        <p className="hero-copy reveal">
          Thoughtfully designed event décor for weddings and milestone
          celebrations—created to make your day feel polished, personal,
          and entirely your own.
        </p>
        <div className="hero-footer">
          <span>Dallas · DMV · Beyond</span>
          <span>Event décor&nbsp;&nbsp;•&nbsp;&nbsp;Backdrops&nbsp;&nbsp;•&nbsp;&nbsp;Tablescapes&nbsp;&nbsp;•&nbsp;&nbsp;Custom signage</span>
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
        <div className="detail-gallery" aria-label="Event décor details">
          <figure>
            <div className="detail-image welcome-sign" role="img" aria-label="Sculptural wedding welcome sign with florals and candlelight" />
            <figcaption>Welcome signage</figcaption>
          </figure>
          <figure>
            <div className="detail-image tablescape-detail" role="img" aria-label="Oxblood, ivory, and brass wedding tablescape" />
            <figcaption>Tablescape styling</figcaption>
          </figure>
          <figure>
            <div className="detail-image custom-detail" role="img" aria-label="Custom wedding menu, place card, florals, and place setting" />
            <figcaption>Custom details</figcaption>
          </figure>
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
        <p className="section-label">Weddings · Milestones · Elevated celebrations</p>
        <h2>Let’s make your day<br /><em>feel extraordinary.</em></h2>
        <button className="primary-button" onClick={openInquiry}>Start an inquiry <span>↗</span></button>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-intro">
          <p className="section-label">Contact Martelier</p>
          <h2>Let’s stay<br /><em>connected.</em></h2>
          <p className="contact-note">
            Have a question, a budding idea, or simply not sure where to begin?
            Reach out in whichever way feels easiest—we’d love to hear what
            you’re dreaming up.
          </p>
        </div>
        <div className="contact-list">
          <div>
            <span>Email</span>
            <strong>Coming soon</strong>
          </div>
          <div>
            <span>Phone</span>
            <strong>Coming soon</strong>
          </div>
          <div>
            <span>Instagram</span>
            <strong>Coming soon</strong>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">Martelier</a>
        <p>Luxury event design &amp; décor</p>
        <div>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <span>© 2026 Martelier</span>
      </footer>

      <div
        className={mailingOpen ? "mailing-overlay is-open" : "mailing-overlay"}
        aria-hidden={!mailingOpen}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeMailing();
        }}
      >
        <section className="mailing-popup" role="dialog" aria-modal="true" aria-labelledby="mailing-title">
          <button className="mailing-close" onClick={closeMailing} aria-label="Close mailing list offer">×</button>
          <div className="mailing-image" role="img" aria-label="Romantic ivory and oxblood wedding tablescape" />
          <div className="mailing-content">
            {mailingJoined ? (
              <div className="mailing-success">
                <p className="section-label">Welcome to the list</p>
                <h2 id="mailing-title">A beautiful beginning.</h2>
                <p>
                  Your 10% welcome offer is reserved. You’ll be the first to
                  hear about special offers, exclusive savings, and new ways
                  to make your celebration feel extraordinary.
                </p>
                <button className="mailing-text-button" onClick={closeMailing}>Continue exploring</button>
              </div>
            ) : (
              <>
                <p className="section-label">A little something for you</p>
                <h2 id="mailing-title">Let’s make your first celebration <em>even sweeter.</em></h2>
                <p>
                  Join the Martelier mailing list for exclusive deals, special
                  offers, and 10% off your first décor service.
                </p>
                <form onSubmit={handleMailingSubmit}>
                  <label>
                    <span className="sr-only">Email address</span>
                    <input type="email" name="mailingEmail" placeholder="Your email address" autoComplete="email" required />
                  </label>
                  <button type="submit">Join the list <span>↗</span></button>
                </form>
                <small>One welcome offer per client. Additional terms may apply.</small>
              </>
            )}
          </div>
        </section>
      </div>

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
              <p className="inquiry-note">
                You don’t need to have every detail figured out just yet. Share
                what you know and what you’re dreaming of—we’ll help shape the rest.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <label>Full name<input name="name" autoComplete="name" required /></label>
                  <label>Phone number<input type="tel" name="phone" autoComplete="tel" required /></label>
                </div>
                <label>Email address<input type="email" name="email" autoComplete="email" required /></label>
                <div className="field-row">
                  <label>Event type
                    <select name="eventType" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Anniversary</option>
                      <option>Baby shower</option>
                      <option>Birthday celebration</option>
                      <option>Brand event</option>
                      <option>Bridal shower</option>
                      <option>Corporate gala</option>
                      <option>Engagement celebration</option>
                      <option>Other celebration</option>
                      <option>Private dinner or soirée</option>
                      <option>Proposal</option>
                      <option>Wedding</option>
                      <option>Wedding (Nikkah)</option>
                    </select>
                  </label>
                  <label>Event date (optional)<input type="date" name="date" /></label>
                </div>
                <div className="field-row">
                  <label>Event location<input name="location" placeholder="City, State" required /></label>
                  <label>Venue (optional)<input name="venue" placeholder="Venue name, if known" /></label>
                </div>
                <label>Estimated décor investment (optional)
                  <select name="budget" defaultValue="">
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
