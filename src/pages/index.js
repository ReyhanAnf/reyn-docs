import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { FiArrowRight, FiBook, FiCode, FiGithub, FiLayers, FiZap } from 'react-icons/fi';
import styles from './index.module.css';

function Feature({ icon: Icon, title, description }) {
  return (
    <div className={clsx('card', styles.featureCard)}>
      <div className={styles.featureIcon}>
        <Icon />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg shadow--md"
              to="/docs/intro">
              <FiBook className={styles.buttonIcon} />
              Get Started
            </Link>
            <Link
              className="button button--primary button--lg shadow--md"
              to="/blog">
              <FiCode className={styles.buttonIcon} />
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      icon: FiZap,
      title: 'Modern & Fast',
      description: 'Built with cutting-edge technology for optimal performance and user experience.',
    },
    {
      icon: FiLayers,
      title: 'Well Organized',
      description: 'Structured documentation with clear navigation and comprehensive guides.',
    },
    {
      icon: FiCode,
      title: 'Developer Friendly',
      description: 'Code examples, interactive playgrounds, and detailed technical specifications.',
    },
    {
      icon: FiGithub,
      title: 'Open Source',
      description: 'Transparent development process with community contributions welcome.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Why Choose This Documentation?
          </Heading>
          <p className={styles.featuresSubtitle}>
            Everything you need for comprehensive technical documentation
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Get Started?
          </Heading>
          <p className={styles.ctaDescription}>
            Explore comprehensive documentation and start building amazing things today.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Get Started
              <FiArrowRight className={styles.buttonIconRight} />
            </Link>
            <Link
              className="button button--primary button--lg"
              to="https://github.com/ReyhanAnf">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Technical Documentation for Modern Development">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
