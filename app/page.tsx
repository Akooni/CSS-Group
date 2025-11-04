"use client";
import Link from 'next/link';
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
      <Section
        id="hero"
        className="pt-20 pb-24"
        title={t('hero.title')}
        subtitle={t('hero.tagline')}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="body-text text-secondary mb-6 max-w-prose">
              {t('whatIs.p1')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#join" className="btn btn-primary" aria-label={t('cta.join')}>
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
      </Section>

      {/* About */}
      <Section id="about" title={t('about.title')} subtitle={t('about.subtitle')}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('about.cards.peerTitle')}</CardTitle>
              <CardDescription>{t('about.cards.peerDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('about.cards.peerBody')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t('about.cards.projectTitle')}</CardTitle>
              <CardDescription>{t('about.cards.projectDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('about.cards.projectBody')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t('about.cards.careerTitle')}</CardTitle>
              <CardDescription>{t('about.cards.careerDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('about.cards.careerBody')}</CardContent>
          </Card>
        </div>
      </Section>

      {/* What is CSS Group */}
      <Section id="what-is" title={t('whatIs.title')} subtitle={t('whatIs.subtitle')}>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <p className="body-text text-secondary">{t('whatIs.p1')}</p>
          <ul className="body-text text-secondary grid gap-3 list-disc pl-5">
            <li>{t('whatIs.li1')}</li>
            <li>{t('whatIs.li2')}</li>
            <li>{t('whatIs.li3')}</li>
            <li>{t('whatIs.li4')}</li>
          </ul>
        </div>
      </Section>

      {/* What We Do */}
      <Section id="activities" title={t('activities.title')} subtitle={t('activities.subtitle')}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('activities.w1.title')}</CardTitle>
              <CardDescription>{t('activities.w1.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('activities.w1.body')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t('activities.w2.title')}</CardTitle>
              <CardDescription>{t('activities.w2.desc')}</CardDescription>
            </CardHeader>
            <CardContent className="text-secondary">{t('activities.w2.body')}</CardContent>
          </Card>
          <Card>
            <CardHeader>
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
        <div className="container-max text-center text-secondary text-sm">
          <nav className="flex items-center justify-center gap-6 mb-3">
            <Link href="#about" className="hover-glow">{t('nav.about')}</Link>
            <Link href="#activities" className="hover-glow">{t('nav.activities')}</Link>
            <Link href="#majors" className="hover-glow">{t('nav.majors')}</Link>
          </nav>
          <p>© {new Date().getFullYear()} Computer Science Society. {t('footer.rights')}</p>
        </div>
      </footer>
    </>
  );
}


