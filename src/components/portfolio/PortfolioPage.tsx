import Image from "next/image";
import styles from "./PortfolioPage.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroBackdrop} aria-hidden="true" />

      <section id="home" className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>{portfolioData.hero.greeting}</p>
          <p className={styles.eyebrow}>{portfolioData.hero.intro}</p>
          <h1>{portfolioData.hero.title}</h1>
          <p className={styles.subtitle}>{portfolioData.hero.subtitle}</p>

          <div className={styles.heroHighlights}>
            {portfolioData.hero.highlights.map((highlight) => (
              <div key={highlight} className={styles.highlightItem}>
                <span className={styles.highlightDot} aria-hidden="true" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaGroup}>
            <a className={styles.primaryBtn} href={portfolioData.hero.ctaPrimary.href}>
              {portfolioData.hero.ctaPrimary.label}
            </a>
            <a className={styles.secondaryBtn} href={portfolioData.hero.ctaSecondary.href}>
              {portfolioData.hero.ctaSecondary.label}
            </a>
          </div>

          <div className={styles.statsRow}>
            {portfolioData.hero.stats.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelKicker}>Profile Snapshot</span>
              <span className={styles.panelStatus}>Open to work</span>
            </div>

            <div className={styles.heroImageWrap}>
              <Image
                src="/images/profile.png"
                alt="Gourab Das profile"
                width={420}
                height={420}
                className={styles.heroImage}
                priority
              />
            </div>

            <div className={styles.profileMeta}>
              <div>
                <p className={styles.metaLabel}>Primary Focus</p>
                <p>{portfolioData.roleLabel}</p>
              </div>
              <div>
                <p className={styles.metaLabel}>Location</p>
                <p>{portfolioData.contact.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>About</p>
          <h2>{portfolioData.about.heading}</h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutCopy}>
            {portfolioData.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.principlesCard}>
            <p className={styles.cardEyebrow}>Working Principles</p>
            {portfolioData.about.principles.map((principle, index) => (
              <div key={principle} className={styles.principleRow}>
                <span>{`0${index + 1}`}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>Capabilities</p>
          <h2>Core Skills</h2>
        </div>
        <div className={styles.skillsGrid}>
          {portfolioData.skills.map((group) => (
            <article key={group.title} className={styles.card}>
              <p className={styles.cardEyebrow}>Toolkit</p>
              <h3>{group.title}</h3>
              <div className={styles.tagList}>
                {group.values.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>Selected Work</p>
          <h2>Personal Projects</h2>
        </div>
        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project, index) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectTopRow}>
                <p className={styles.projectIndex}>{`0${index + 1}`}</p>
                <div className={styles.linksRow}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tagList}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>Career Path</p>
          <h2>Experience</h2>
        </div>
        <div className={styles.timeline}>
          {portfolioData.experience.map((item, index) => (
            <article key={`${item.role}-${item.company}`} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>{`0${index + 1}`}</div>
              <div>
                <h3>{item.role}</h3>
                <p className={styles.meta}>
                  {item.company} | {item.duration}
                </p>
              </div>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.contactCard}>
          <div className={styles.sectionHeading}>
            <p>Let&apos;s Build</p>
            <h2>Ready to collaborate on the next product?</h2>
          </div>

          <div className={styles.contactGrid}>
            <p>
              <strong>Email</strong>
              <span>{portfolioData.contact.email}</span>
            </p>
            <p>
              <strong>Phone</strong>
              <span>{portfolioData.contact.phone}</span>
            </p>
            <p>
              <strong>Location</strong>
              <span>{portfolioData.contact.location}</span>
            </p>
          </div>

          <div className={styles.linksRow}>
            {portfolioData.contact.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
