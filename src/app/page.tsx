import { salon } from "@/config/salon";
import { MarqueeStrip } from "@/components/animations/MarqueeStrip";
import { SalonEffects } from "@/components/animations/SalonEffects";

type IconName =
  | "scissors"
  | "razor"
  | "sparkle"
  | "droplet"
  | "leaf"
  | "crown"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "arrow"
  | "phone"
  | "pin";

function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    scissors: (
      <>
        <circle cx="6" cy="7" r="3" />
        <circle cx="6" cy="17" r="3" />
        <path d="m8.7 8.3 10.8 7.2M8.7 15.7 19.5 8.5" />
      </>
    ),
    razor: (
      <>
        <path d="M4 5h16v5H4zM8 10v9M16 10v9M6 19h12" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
        <path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" />
      </>
    ),
    droplet: <path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z" />,
    leaf: (
      <>
        <path d="M20 4S9 3 5 10c-3 5 1 9 5 8 7-2 10-14 10-14Z" />
        <path d="M4 20c3-5 7-8 12-11" />
      </>
    ),
    crown: (
      <>
        <path d="m3 7 4 4 5-7 5 7 4-4-2 11H5L3 7Z" />
        <path d="M5 18h14" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
      </>
    ),
    facebook: (
      <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5A27 27 0 0 0 15 1c-3 0-5 1.8-5 5.2V9H7v4h3v8" />
    ),
    tiktok: (
      <path d="M15 4c1 2.7 2.7 4 5 4v4c-2 0-3.8-.6-5-1.7V16a5 5 0 1 1-5-5v4a1.5 1.5 0 1 0 1.5 1.5V3H15v1Z" />
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    phone: (
      <path d="M6.6 3h3l1.5 5-2 1.3a15 15 0 0 0 5.6 5.6l1.3-2 5 1.5v3a3 3 0 0 1-3 3C10 20.4 3.6 14 3.6 6a3 3 0 0 1 3-3Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <SplitHeading text={title} as="h2" />
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}

function SplitHeading({
  text,
  as: Tag,
  className = "",
}: {
  text: string;
  as: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag className={`font-display ${className}`}>
      <span className="sr-only">{text}</span>
      <span className="split-heading" aria-hidden="true">
        {text.split(" ").map((word, index) => (
          <span className="split-word-wrap" key={`${word}-${index}`}>
            <span className="split-word">{word}</span>
            {index < text.split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
}

const whatsappHref = `https://wa.me/${salon.contact.whatsappNumber}?text=${encodeURIComponent(salon.contact.whatsappMessage)}`;

export default function Home() {
  return (
    <main>
      <SalonEffects />
      <header className="site-header">
        <a
          className="brand font-display"
          href="#home"
          aria-label={`${salon.brand.name} ${salon.ui.homeLinkLabel}`}
        >
          <span className="brand-mark">{salon.brand.shortName}</span>
          <span>{salon.brand.name}</span>
        </a>

        <nav
          className="desktop-nav"
          aria-label={salon.ui.primaryNavigationLabel}
        >
          {salon.navigation.map((item) => (
            <a key={item.href} href={item.href} data-cursor="Go">
              {item.label}
            </a>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label={salon.ui.openNavigationLabel}>
            {salon.ui.menuLabel}
          </summary>
          <nav aria-label={salon.ui.mobileNavigationLabel}>
            {salon.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>

        <a
          className="header-cta"
          href="#contact"
          data-cursor="Book"
          data-magnetic
        >
          {salon.hero.primaryCta}
          <Icon name="arrow" />
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-brand-name font-display">
            {salon.brand.name}
          </span>
          <p className="eyebrow hero-eyebrow">{salon.hero.eyebrow}</p>
          <SplitHeading
            text={salon.hero.title}
            as="h1"
            className="hero-title"
          />
          <p className="hero-description">{salon.hero.description}</p>
          <div className="hero-actions">
            <a
              className="button button--primary"
              href="#contact"
              data-cursor="Book"
              data-magnetic
            >
              {salon.hero.primaryCta}
              <Icon name="arrow" />
            </a>
            <a
              className="button button--ghost"
              href="#services"
              data-cursor="View"
              data-magnetic
            >
              {salon.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={salon.hero.imageUrl}
            alt={salon.hero.imageAlt}
            fetchPriority="high"
          />
          <div className="hero-card">
            <span className="pulse" />
            <span>{salon.hero.availability}</span>
          </div>
          <div className="vertical-label">{salon.brand.name}</div>
        </div>
      </section>

      <MarqueeStrip items={salon.marquee} />

      <section className="section services" id="services">
        <SectionHeading {...salon.servicesSection} />
        <div className="service-grid">
          {salon.services.map((service, index) => (
            <article
              className="service-card"
              key={service.name}
              data-cursor="Explore"
            >
              <div className="service-card-top">
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>
                <span className="service-number">0{index + 1}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section gallery-section horizontal-gallery"
        id="gallery"
      >
        <SectionHeading {...salon.gallerySection} align="center" />
        <div className="gallery-viewport">
          <div className="gallery-track">
            {salon.gallery.map((image, index) => (
              <figure
                className={`gallery-item gallery-item--${image.aspect}`}
                key={image.url}
                data-cursor="View"
              >
                <img src={image.url} alt={image.alt} loading="lazy" />
                <figcaption>
                  <span>0{index + 1}</span>
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-image">
          <img
            src={salon.about.imageUrl}
            alt={salon.about.imageAlt}
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow={salon.about.eyebrow}
            title={salon.about.title}
          />
          <div className="about-text">
            {salon.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="stats">
            {salon.about.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section hours" id="hours">
        <div className="hours-intro">
          <SectionHeading
            eyebrow={salon.hoursSection.eyebrow}
            title={salon.hoursSection.title}
          />
          <p>{salon.hoursSection.note}</p>
          <a className="text-link" href="#contact">
            {salon.ui.reserveTimeLabel} <Icon name="arrow" />
          </a>
        </div>
        <div className="hours-list">
          {salon.hours.map((row) => (
            <div className="hours-row" key={row.day}>
              <span>{row.day}</span>
              <span className="hours-rule" />
              <strong>{row.time}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <SectionHeading {...salon.testimonialsSection} align="center" />
        <div className="testimonial-deck" aria-label="Customer testimonials">
          {salon.testimonials.map((testimonial) => (
            <article
              className="testimonial testimonial-card"
              key={testimonial.name}
              data-cursor="Swipe"
            >
              <div
                className="stars"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {"★".repeat(testimonial.rating)}
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.service}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <SectionHeading
            eyebrow={salon.contact.eyebrow}
            title={salon.contact.title}
            description={salon.contact.description}
          />
          <div className="contact-details">
            <a href={salon.contact.phoneHref}>
              <Icon name="phone" />
              <span>{salon.contact.phoneDisplay}</span>
            </a>
            <div>
              <Icon name="pin" />
              <span>{salon.contact.address}</span>
            </div>
          </div>
          <div className="map-wrap">
            <iframe
              src={salon.contact.mapEmbedUrl}
              title={salon.ui.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          className="booking-form"
          aria-label={salon.ui.appointmentFormLabel}
        >
          <div className="field-grid">
            <label>
              {salon.contact.form.nameLabel}
              <input
                type="text"
                name="name"
                placeholder={salon.contact.form.namePlaceholder}
              />
            </label>
            <label>
              {salon.contact.form.phoneLabel}
              <input
                type="tel"
                name="phone"
                placeholder={salon.contact.form.phonePlaceholder}
              />
            </label>
          </div>
          <label>
            {salon.contact.form.serviceLabel}
            <select name="service" defaultValue="">
              <option value="" disabled>
                {salon.contact.form.servicePlaceholder}
              </option>
              {salon.contact.serviceOptions.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label>
            {salon.contact.form.messageLabel}
            <textarea
              name="message"
              rows={5}
              placeholder={salon.contact.form.messagePlaceholder}
            />
          </label>
          <button
            type="button"
            className="button button--primary form-button"
            data-cursor="Book"
            data-magnetic
          >
            {salon.contact.form.submitLabel}
            <Icon name="arrow" />
          </button>
          <p className="form-note">{salon.contact.form.note}</p>
        </form>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <a className="brand font-display" href="#home">
              <span className="brand-mark">{salon.brand.shortName}</span>
              <span>{salon.brand.name}</span>
            </a>
            <p>{salon.footer.description}</p>
          </div>
          <div className="social-links">
            {salon.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>{salon.footer.copyright}</span>
          <a href={`mailto:${salon.contact.email}`}>{salon.contact.email}</a>
        </div>
      </footer>

      <a
        className="whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={salon.contact.whatsappLabel}
        data-cursor="Chat"
        data-magnetic
      >
        <span className="whatsapp-icon">
          <img src="/assets/whatsapp.svg" />
        </span>
        <span>{salon.contact.whatsappLabel}</span>
      </a>
    </main>
  );
}
