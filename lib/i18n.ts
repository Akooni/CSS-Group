import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { about: 'About', whatIs: 'What is CSS Group?', activities: 'What We Do', majors: 'Majors', join: 'Join' },
      hero: { title: 'Computer Science Society', tagline: 'Learn together. Build together. Succeed together.' },
      cta: { join: 'Join the Community', exploreMajors: 'Explore Majors', seeActivities: 'See Activities' },
      about: {
        title: 'About Us', subtitle: 'We make learning computer science practical, fun, and collaborative.',
        cards: {
          peerTitle: 'Peer Learning', peerDesc: 'Work with supportive peers who help you grow.', peerBody: 'Weekly sessions focused on building skills through practice.',
          projectTitle: 'Project First', projectDesc: 'Real projects that you can show recruiters.', projectBody: 'From idea to demo night—ship something you are proud of.',
          careerTitle: 'Career Ready', careerDesc: 'Interview practice and industry insights.', careerBody: 'We prepare you for internships, competitions, and jobs.'
        }
      },
      whatIs: {
        title: 'What is CSS Group?', subtitle: 'An inclusive community where you can explore, specialize, and lead.',
        p1: 'The Computer Science Society (CSS) is a student community dedicated to practical learning. We run events that help you master technologies used in the real world and build a strong portfolio.',
        li1: 'Beginner-friendly labs and workshops', li2: 'Mentored projects and study groups', li3: 'Talks from alumni and professionals', li4: 'Open to all students—no experience required'
      },
      activities: {
        title: 'What We Do', subtitle: 'Learn by doing—events that grow your skills and network.',
        w1: { title: 'Workshops & Labs', desc: 'Guided, hands-on sessions', body: 'Build apps, analyze data, and learn modern dev tools.' },
        w2: { title: 'Projects & Showcases', desc: 'Team up and ship', body: 'Real-world projects with demo nights and feedback.' },
        w3: { title: 'Career & Competitions', desc: 'Prepare and compete', body: 'Interview prep, hackathons, and CTF-style challenges.' }
      },
      majors: {
        title: 'Majors Explained', subtitle: 'Choose your path and develop in-demand skills.',
        dsTitle: 'BSc Computer Science – Data Science', dsDesc: 'Data-driven thinking and practical analytics',
        dsSkills: { s1: 'Python/SQL', s2: 'Statistics & Probability', s3: 'Machine Learning', s4: 'Data Visualization' },
        cyTitle: 'BSc Computer Science – Cybersecurity', cyDesc: 'Defend systems and think like an attacker',
        cySkills: { s1: 'Networks & OS', s2: 'Threat Modeling', s3: 'Cryptography Basics', s4: 'SecOps & Hardening' }
      },
      join: { title: 'Ready to Join?', subtitle: 'Be part of a community that learns and builds together.' },
      footer: { rights: 'Built with care by students.' }
    }
  },
  ar: {
    translation: {
      nav: { about: 'من نحن', whatIs: 'ما هي مجموعة CSS؟', activities: 'ماذا نفعل', majors: 'التخصصات', join: 'انضم' },
      hero: { title: 'جمعية علوم الحاسوب', tagline: 'نتعلم معًا. نبني معًا. ننجح معًا.' },
      cta: { join: 'انضم إلى المجتمع', exploreMajors: 'استكشف التخصصات', seeActivities: 'شاهد الأنشطة' },
      about: {
        title: 'من نحن', subtitle: 'نجعل تعلم علوم الحاسوب عمليًا وممتعًا وتعاونيًا.',
        cards: {
          peerTitle: 'التعلم مع الأقران', peerDesc: 'زملاء داعمون يساعدونك على التطور.', peerBody: 'جلسات أسبوعية تركز على بناء المهارات بالممارسة.',
          projectTitle: 'المشاريع أولًا', projectDesc: 'مشاريع حقيقية تعرضها لأصحاب العمل.', projectBody: 'من الفكرة إلى ليلة العرض — أنجز شيئًا تفخر به.',
          careerTitle: 'جاهزية مهنية', careerDesc: 'تدريب مقابلات ورؤى مهنية.', careerBody: 'نعدّك للتدريب والبطولات والوظائف.'
        }
      },
      whatIs: {
        title: 'ما هي مجموعة CSS؟', subtitle: 'مجتمع شامل لتستكشف وتتخصص وتقود.',
        p1: 'جمعية علوم الحاسوب هي مجتمع طلابي مكرّس للتعلم العملي. ننظّم فعاليات تساعدك على إتقان التقنيات وبناء ملف أعمال قوي.',
        li1: 'ورش ومختبرات للمبتدئين', li2: 'مشاريع بإشراف ومجموعات دراسية', li3: 'لقاءات مع خريجين ومحترفين', li4: 'مفتوح لجميع الطلاب — لا يشترط خبرة'
      },
      activities: {
        title: 'ماذا نفعل', subtitle: 'نتعلم بالممارسة — فعاليات تنمّي مهاراتك وعلاقاتك.',
        w1: { title: 'ورش ومختبرات', desc: 'جلسات تطبيقية موجهة', body: 'نبني تطبيقات ونحلّل البيانات ونتعلم أدوات حديثة.' },
        w2: { title: 'مشاريع وعروض', desc: 'اعمل ضمن فريق وأنجز', body: 'مشاريع واقعية مع ليالي عرض وملاحظات.' },
        w3: { title: 'مسار مهني وبطولات', desc: 'استعد وتنافس', body: 'تدريب مقابلات وهاكاثونات وتحديات أمنية.' }
      },
      majors: {
        title: 'شرح التخصصات', subtitle: 'اختر مسارك وطوّر مهارات مطلوبة.',
        dsTitle: 'بكالوريوس علوم الحاسوب — علم البيانات', dsDesc: 'تفكير قائم على البيانات وتحليلات عملية',
        dsSkills: { s1: 'بايثون/SQL', s2: 'الإحصاء والاحتمالات', s3: 'تعلّم الآلة', s4: 'تصوير البيانات' },
        cyTitle: 'بكالوريوس علوم الحاسوب — الأمن السيبراني', cyDesc: 'احمِ الأنظمة وفكّر كالمهاجم',
        cySkills: { s1: 'الشبكات ونظم التشغيل', s2: 'نمذجة التهديدات', s3: 'أساسيات التشفير', s4: 'الأمن التشغيلي والتقسية' }
      },
      join: { title: 'جاهز للانضمام؟', subtitle: 'كن جزءًا من مجتمع يتعلم ويبني معًا.' },
      footer: { rights: 'بُني بحب على أيدي الطلاب.' }
    }
  }
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      supportedLngs: ['en', 'ar'],
      interpolation: { escapeValue: false },
      detection: { order: ['querystring', 'localStorage'], caches: ['localStorage'], lookupQuerystring: 'lng' },
    });
}

export default i18n;


