"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Sparkles, GraduationCap, Cpu, BarChart3, Shield, Database, Layers } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero */}
      <section id="hero" className="section-y pt-20 pb-24 hero-bg">
        <div className="container-max">
          <div className="mb-10">
            <h2 className="heading-xl">{t('hero.title')}</h2>
            <p className="body-text text-secondary mt-3 max-w-2xl">{t('hero.tagline')}</p>
          </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="body-text text-secondary mb-6 max-w-prose">
              {t('whatIs.p1')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSffQ9x9CS9Vnk3DR0gTfZcsNzBQAAvFCVaWfKm1EqzKIf5Wrw/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary" 
                aria-label={t('cta.join')}
              >
                <Sparkles size={18} /> {t('cta.join')}
              </Link>
              <Link href="#majors" className="btn btn-secondary" aria-label={t('cta.exploreMajors')}>
                <GraduationCap size={18} /> {t('cta.exploreMajors')}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div className="glass p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25 }}>
              <Code2 className="text-primary" />
              <p className="mt-3 body-text">{t('activities.w1.desc')}</p>
            </motion.div>
            <motion.div className="glass p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: 0.05 }}>
              <Cpu className="text-primary" />
              <p className="mt-3 body-text">{t('activities.subtitle')}</p>
            </motion.div>
            <motion.div className="glass p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: 0.1 }}>
              <Layers className="text-primary" />
              <p className="mt-3 body-text">{t('activities.w2.desc')}</p>
            </motion.div>
            <motion.div className="glass p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: 0.15 }}>
              <BarChart3 className="text-primary" />
              <p className="mt-3 body-text">{t('activities.w3.desc')}</p>
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title={t('about.title')} subtitle={t('about.subtitle')}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <i className="fa-solid fa-users text-primary mb-4" style={{ fontSize: '2.5rem' }}></i>
              <CardTitle>{t('about.cards.peerTitle')}</CardTitle>
              <CardDescription>{t('about.cards.peerDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('about.cards.peerBody')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <i className="fa-solid fa-code text-primary mb-4" style={{ fontSize: '2.5rem' }}></i>
              <CardTitle>{t('about.cards.projectTitle')}</CardTitle>
              <CardDescription>{t('about.cards.projectDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('about.cards.projectBody')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <i className="fa-solid fa-briefcase text-primary mb-4" style={{ fontSize: '2.5rem' }}></i>
              <CardTitle>{t('about.cards.careerTitle')}</CardTitle>
              <CardDescription>{t('about.cards.careerDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('about.cards.careerBody')}</CardContent>
          </Card>
        </div>
      </Section>

      {/* What is CSS Group */}
      <Section id="what-is" title={t('whatIs.title')} subtitle={t('whatIs.subtitle')}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="body-text text-secondary">{t('whatIs.p1')}</p>
          <div className="flex justify-center items-center">
            <img 
              src="/pixel-art-scene.png?v=1" 
              alt="Computer Science Society community scene" 
              className="rounded-lg w-full max-w-md shadow-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section id="activities" title={t('activities.title')} subtitle={t('activities.subtitle')}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <i className="fa-solid fa-chalkboard-user text-primary mb-4" style={{ fontSize: '2.5rem' }}></i>
              <CardTitle>{t('activities.w1.title')}</CardTitle>
              <CardDescription>{t('activities.w1.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('activities.w1.body')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <i className="fa-solid fa-laptop-code text-primary mb-4" style={{ fontSize: '2.5rem' }}></i>
              <CardTitle>{t('activities.w2.title')}</CardTitle>
              <CardDescription>{t('activities.w2.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('activities.w2.body')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <i className="fa-solid fa-trophy text-primary mb-4" style={{ fontSize: '2.5rem' }}></i>
              <CardTitle>{t('activities.w3.title')}</CardTitle>
              <CardDescription>{t('activities.w3.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('activities.w3.body')}</CardContent>
          </Card>
        </div>
      </Section>

      {/* Majors Explained */}
      <Section id="majors" title={t('majors.title')} subtitle={t('majors.subtitle')}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="text-primary" />
                <CardTitle>{t('majors.dsTitle')}</CardTitle>
              </div>
              <CardDescription>{t('majors.dsDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-secondary grid gap-2 list-disc pl-5">
                <li>{t('majors.dsSkills.s1')}</li>
                <li>{t('majors.dsSkills.s2')}</li>
                <li>{t('majors.dsSkills.s3')}</li>
                <li>{t('majors.dsSkills.s4')}</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="text-primary" />
                <CardTitle>{t('majors.cyTitle')}</CardTitle>
              </div>
              <CardDescription>{t('majors.cyDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-secondary grid gap-2 list-disc pl-5">
                <li>{t('majors.cySkills.s1')}</li>
                <li>{t('majors.cySkills.s2')}</li>
                <li>{t('majors.cySkills.s3')}</li>
                <li>{t('majors.cySkills.s4')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Join CTA */}
      <Section id="join" title={t('join.title')} subtitle={t('join.subtitle')}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="#" className="btn btn-primary" aria-label={t('cta.join')}>
            <Sparkles size={18} /> {t('cta.join')}
          </Link>
          <Link href="#activities" className="btn btn-secondary" aria-label={t('cta.seeActivities')}>
            <Cpu size={18} /> {t('cta.seeActivities')}
          </Link>
        </div>
      </Section>

      {/* Footer */}
      <footer className="section-y border-t" style={{ borderColor: 'var(--color-grid-line)' }}>
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: About + Logo */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Computer Science Society logo"
                  width={48}
                  height={48}
                  className="footer-logo"
                />
                <span className="text-primary font-bold text-lg">CSS Society</span>
              </div>
              <p className="body-text text-secondary text-sm max-w-xs leading-relaxed">
                {t('footer.about')}
              </p>
            </div>

            {/* Column 2: Our University */}
            <div className="flex flex-col gap-4">
              <h3 className="heading-lg text-sm mb-2">{t('footer.ourUniversity')}</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/university-logo.png"
                    alt="Dhofar University logo"
                    width={64}
                    height={64}
                    className="object-contain"
                    onError={(e) => {
                      // Hide image if logo doesn't exist
                      const target = e.target as HTMLImageElement;
                      if (target.parentElement) {
                        target.parentElement.style.display = 'none';
                      }
                    }}
                  />
                  <span className="university-name text-base">
                    Dhofar University
                  </span>
                </div>
                <p className="body-text text-secondary text-sm leading-relaxed">
                  {t('footer.universityDesc')}
                </p>
                <a
                  href="https://www.du.edu.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="university-website-link text-secondary hover:text-primary text-sm transition-colors proximity-hover inline-flex items-center w-fit"
                >
                  {t('footer.universityLink')}
                  <span className="text-xs arrow-spacer" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="heading-lg text-sm mb-2">{t('footer.quickLinks')}</h3>
              <nav className="flex flex-col gap-3">
                <Link href="#about" className="text-secondary hover:text-primary text-sm transition-colors proximity-hover">
                  {t('nav.about')}
                </Link>
                <Link href="#activities" className="text-secondary hover:text-primary text-sm transition-colors proximity-hover">
                  {t('footer.events')}
                </Link>
                <Link href="#activities" className="text-secondary hover:text-primary text-sm transition-colors proximity-hover">
                  {t('footer.projects')}
                </Link>
                <Link href="#join" className="text-secondary hover:text-primary text-sm transition-colors proximity-hover">
                  {t('nav.join')}
                </Link>
                <Link href="#majors" className="text-secondary hover:text-primary text-sm transition-colors proximity-hover">
                  {t('nav.majors')}
                </Link>
              </nav>
            </div>

            {/* Column 4: Follow Us */}
            <div className="flex flex-col gap-4">
              <h3 className="heading-lg text-sm mb-2">{t('footer.followUs')}</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/css.du/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors proximity-hover"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t text-center" style={{ borderColor: 'var(--color-grid-line)' }}>
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} Computer Science Society. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


