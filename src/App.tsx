import { useEffect, useState, type MouseEvent } from 'react';
import {
  ArrowUpLeft,
  ArrowUpRight,
  ArrowUp,
  BadgeCheck,
  Check,
  Code2,
  Copy,
  Download,
  ExternalLink,
  GitBranch,
  Globe2,
  Mail,
  Menu,
  Monitor,
  Moon,
  MousePointer2,
  Palette,
  Phone,
  Send,
  Sparkles,
  Star,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import {
  brandIcons,
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  InstagramIcon,
} from '@/components/BrandIcons';

type Language = 'fa' | 'en';
type IconType = typeof Code2;


const skillGroups = [
  {
    title: ' ',
    titleEn: 'Design',
    label: '01 / DESIGN',
    items: [
      ['Photoshop', 45],
      ['Illustrator', 85],
      ['Figma', 45],
    ],
  },
  {
    title: ' ',
    titleEn: 'Microsoft',
    label: '02 / MICROSOFT',
    items: [
      ['Excel', 75],
      ['Word', 65],
      ['PowerPoint', 50],
    ],
  },
  {
    title: ' ',
    titleEn: 'Development',
    label: '03 / DEVELOPMENT',
    items: [
      ['HTML', 85],
      ['CSS', 80],
      ['JavaScript', 30],
    ],
  },
];


const projects = [
  { number: '01', title: 'کافه نُوا', titleEn: 'Nova Café', en: 'NOVA / RESTAURANT', type: 'Restaurant Website', typeFa: 'وب‌سایت رستوران', color: 'mint', stack: ['React', 'UI/UX'], description: 'تجربه‌ای گرم و اشتهابرانگیز برای یک کافه مدرن.', descriptionEn: 'A warm, appetite-driven experience for a modern café.' },
  { number: '02', title: 'تمرکز', titleEn: 'Tamarkoz', en: 'TAMARKOZ / TASK MANAGER', type: 'Task Manager', typeFa: 'مدیریت کارها', color: 'violet', stack: ['React', 'Product Design'], description: 'مدیریت کارها با ریتمی ساده، سریع و انسانی.', descriptionEn: 'Task management with a simple, fast and human rhythm.' },
  { number: '03', title: 'پوسترهای منتخب', titleEn: 'Selected Posters', en: 'SELECTED / POSTERS', type: 'Poster Design Collection', typeFa: 'مجموعه طراحی پوستر', color: 'orange', stack: ['Photoshop', 'Illustrator'], description: 'مجموعه‌ای از فرم، تایپوگرافی و جسارت بصری.', descriptionEn: 'A collection of form, typography and visual boldness.' },
];

const aiTools = ['ChatGPT', 'Claude', 'Gemini', 'Lovable', 'Bolt.new'];
const devTools = ['VS Code', 'Git', 'GitHub'];

const additionalSkillsIntroFa = 'این ابزارها بخشی از گردش کار روزانه من هستند؛ کمک می‌کنند ایده‌ها را سریع‌تر طراحی، بسازم و بهتر کنم و محصولاتی دیجیتال با کیفیت بالاتر خلق کنم.';
const additionalSkillsIntroEn = 'These tools are part of my daily workflow — they help me design, build and improve digital products faster and with higher quality.';

const aboutFa = [
  'رضا تسویه‌چی هستم؛ ساکن تهران و علاقه‌مند به یادگیری و خلق ایده‌های جدید. عاشق طراحی رابط کاربری، تجربه کاربری، طراحی صفحات وب و طراحی پوستر هستم و معتقدم هر جزئیات کوچک می‌تواند تجربه‌ای متفاوت بسازد.',
  'در حال حاضر در مرکز تماس مشغول به کارم؛ شغلی که ارتباط مستقیمی با علاقه و تخصصم ندارد، اما در کنار ادامه تحصیل، فرصتی پایدار برای ساخت آینده حرفه‌ای‌ام فراهم کرده است. این مسیر به من یاد داده که با انضباط و صبر، حتی فاصله‌های دور قابل طی هستند.',
  'هدف من تبدیل شدن به یک UI/UX Designer و Front-end Developer حرفه‌ای است که بتواند ایده‌ها را به تجربه‌های دیجیتال زیبا، کاربردی و انسان‌محور تبدیل کند؛ تجربه‌هایی که هم دیده شوند و هم حس شوند.',
];

const aboutEn = [
  'I’m Reza Tasviechi, based in Tehran, driven by curiosity and the joy of shaping new ideas. I love UI design, UX, web design and poster design — and I believe the smallest details can redefine an experience.',
  'Right now I work at a call center — a role not directly tied to my passion — but alongside my studies it gives me a stable foundation to build my professional future. The path has taught me that with discipline and patience, even long distances can be covered.',
  'My goal is to become a professional UI/UX Designer and Front-end Developer who turns ideas into beautiful, functional, human-centered digital experiences — experiences that are both seen and felt.',
];

const socialLinks = [
  { icon: GitHubIcon, label: 'GitHub', href: '#' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { icon: TelegramIcon, label: 'Telegram', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
];

function App() {
  const [language, setLanguage] = useState<Language>('fa');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState('');
  const [toast, setToast] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showTop, setShowTop] = useState(false);

  const isFa = language === 'fa';
  const copyValue = async (value: string, label: string) => {
    await navigator.clipboard?.writeText(value);
    setCopied(label);
    showToast(isFa ? 'در کلیپ‌بورد کپی شد' : 'Copied to clipboard');
    window.setTimeout(() => setCopied(''), 1800);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total ? (window.scrollY / total) * 100 : 0);
      setShowTop(window.scrollY > 600);
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const box = element.getBoundingClientRect();
        return box.top <= 160 && box.bottom >= 160;
      });
      if (current) setActiveSection(current);
    };
    const onMove = (event: globalThis.MouseEvent) => setMouse({ x: event.clientX, y: event.clientY });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    onScroll();
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMove); };
  }, [isFa]);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2200);
  };

  const navItems = [
    ['home', isFa ? 'خانه' : 'Home'], ['about', isFa ? 'درباره من' : 'About'], ['skills', isFa ? 'مهارت‌ها' : 'Skills'],
    ['projects', isFa ? 'پروژه‌ها' : 'Projects'], ['experience', isFa ? 'تجربه' : 'Experience'], ['contact', isFa ? 'ارتباط' : 'Contact'],
  ];

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    showToast(isFa ? 'پیام شما آماده ارسال شد.' : 'Your message is ready to send.');
  };

  const aboutText = isFa ? aboutFa : aboutEn;
  const additionalIntro = isFa ? additionalSkillsIntroFa : additionalSkillsIntroEn;

  return (
    <div className={isFa ? 'app rtl' : 'app'} dir={isFa ? 'rtl' : 'ltr'} style={{ '--mouse-x': `${mouse.x}px`, '--mouse-y': `${mouse.y}px` } as React.CSSProperties}>
      {loading && <div className="loader"><div className="loader-mark">RT<span>.</span></div><div className="loader-line"><span /></div><small>{isFa ? 'طراح خلاق / توسعه‌دهنده' : 'CREATIVE DESIGNER / DEVELOPER'}</small></div>}
      <div className="cursor-glow" />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Reza Tasviechi home"><span>RT</span><i>®</i></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="language" onClick={() => setLanguage(isFa ? 'en' : 'fa')} aria-label="Switch language"><Globe2 size={15} /> {isFa ? 'EN' : 'فا'}</button>
          <a className="resume-mini" href="#contact"><Download size={15} /> <span>{isFa ? 'رزومه' : 'Resume'}</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> {isFa ? 'طراح دیجیتال مستقل' : 'INDEPENDENT DIGITAL DESIGNER'} <span className="eyebrow-line" /></div>
            <h1>{isFa ? <>ایده‌ها را<br /><em>زنده</em> می‌کنم.</> : <>I make ideas<br /><em>feel alive.</em></>}</h1>
            <p className="hero-intro">{isFa ? 'من رضا تسویه‌چی هستم؛ طراح UI/UX و توسعه‌دهنده خلاقی که میان طراحی، کد و جزئیات کوچک، تجربه‌های بزرگ می‌سازم.' : 'I’m Reza Tasviechi — a UI/UX designer and creative developer crafting thoughtful digital experiences through design, code and tiny details.'}</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">{isFa ? 'مشاهده پروژه‌ها' : 'Explore work'} <ArrowUpLeft size={17} /></a><a className="text-link" href="#contact">{isFa ? 'با من صحبت کنید' : 'Let’s talk'} <ArrowUpRight size={16} /></a></div>
            <div className="hero-meta"><span>TEHRAN, IR <i>—</i> 35°41&apos;N</span><span className="meta-year">© 2024 — 2025</span></div>
          </div>
          <PixelScene isFa={isFa} />



          <div className="scroll-cue"><span>{isFa ? 'اسکرول کنید' : 'SCROLL TO EXPLORE'}</span><div className="scroll-line" /></div>
        </section>

        <section id="about" className="section-shell about-section">
          <SectionHeading kicker={isFa ? '۰۱ / درباره من' : '01 / ABOUT'} title={isFa ? 'کنجکاوی، موتور حرکت من است.' : 'Curiosity is my engine.'} />
          <div className="about-grid">
            <div className="about-statement">
              <span className="big-number">01</span>
              <p>{isFa ? 'هر پروژه فرصتی است برای یادگیری، آزمودن و ساختن چیزی که قبلاً وجود نداشته.' : 'Every project is an invitation to learn, test, and create something that did not exist before.'}</p>
            </div>
            <div className="about-copy">
              {aboutText.map((para, i) => <p key={i}>{para}</p>)}
              <div className="about-tags"><span>UI / UX</span><span>{isFa ? 'فرانت‌اند' : 'FRONT-END'}</span><span>{isFa ? 'طراحی بصری' : 'VISUAL DESIGN'}</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell skills-section">
          <SectionHeading kicker={isFa ? '۰۲ / ابزارها' : '02 / TOOLKIT'} title={isFa ? 'ابزارهایی برای فکر کردن، ساختن و بهتر شدن.' : 'Tools for thinking, making and getting better.'} />

          <div className="skills-layout">

            </div>

                               <div className="skill-cards">
              {skillGroups.map((group) => (
                <SkillCard
                  key={group.label}
                  {...group}
                  isFa={isFa}
                />
              ))}
            </div>

        </section>

        <section className="section-shell additional-skills-section">
          <SectionHeading kicker={isFa ? '۰۳ / مهارت‌های تکمیلی' : '03 / ADDITIONAL SKILLS'} title={isFa ? 'مهارت‌های تکمیلی' : 'Additional Skills'} />
          <p className="additional-intro">{additionalIntro}</p>
          <div className="badge-groups">
            <BadgeGroup title={isFa ? 'ابزارهای هوش مصنوعی' : 'AI Tools'} icon={Zap} items={aiTools} />
            <BadgeGroup title={isFa ? 'ابزارهای توسعه‌دهنده' : 'Developer Tools'} icon={Terminal} items={devTools} />
          </div>
        </section>

        <section id="projects" className="section-shell projects-section">
          <SectionHeading kicker={isFa ? '۰۴ / کارهای منتخب' : '04 / SELECTED WORK'} title={isFa ? 'چیزهایی که با دقت ساخته‌ام.' : 'Things I made with intention.'} action={isFa ? 'آرشیو پروژه‌ها' : 'View archive'} />
          <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} {...project} isFa={isFa} />)}</div>
        </section>

        <section id="experience" className="section-shell experience-section">
          <SectionHeading kicker={isFa ? '۰۵ / تجربه' : '05 / EXPERIENCE'} title={isFa ? 'مسیر هنوز ادامه دارد.' : 'The path is still unfolding.'} />
          <div className="timeline">
            <TimelineItem year="2023 — 2025" company="Tipax" role={isFa ? 'مرکز پشتیبانی مشتریان' : 'Customer Support Center'} date={isFa ? 'مرداد ۱۴۰۲ — فروردین ۱۴۰۴' : 'Aug 2023 — Apr 2025'} />
            <TimelineItem year="2025 — NOW" company="Haft-Heshtad" role={isFa ? 'مرکز پشتیبانی مشتریان' : 'Customer Support Center'} date={isFa ? 'اردیبهشت ۱۴۰۴ — اکنون' : 'May 2025 — Present'} current />
          </div>
        </section>

        <section className="section-shell loves-section">
          <div className="loves-copy">
            <div className="eyebrow">{isFa ? '۰۶ / شاخص شخصی' : '06 / PERSONAL INDEX'}</div>
            <h2>{isFa ? <>چیزهایی که<br /><em>دوست دارم.</em></> : <>Things I<br /><em>love.</em></>}</h2>
            <p>{isFa ? 'من از چیزهای کوچک انرژی می‌گیرم؛ از یک رابط کاربری تمیز تا یک گربه پیکسلی در گوشه صفحه.' : 'I find energy in small things — from a clean interface to a pixel cat hiding in the corner.'}</p>
          </div>
          <div className="love-icons">
            <FloatingLove icon={Monitor} label={isFa ? 'ساختن' : 'BUILD'} className="love-one" />
            <FloatingLove icon={Moon} label={isFa ? 'تعجب' : 'WONDER'} className="love-two" />
            <FloatingLove icon={Star} label={isFa ? 'جزئیات' : 'DETAIL'} className="love-three" />
            <FloatingLove icon={Sparkles} label={isFa ? 'بازی' : 'PLAY'} className="love-four" />
            <FloatingLove icon={MousePointer2} label={isFa ? 'جریان' : 'FLOW'} className="love-five" />
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <SectionHeading kicker={isFa ? '۰۷ / ارتباط' : '07 / CONTACT'} title={isFa ? <>بیایید چیزی<br /><em>معنادار</em> بسازیم.</> : <>Let’s build something<br /><em>meaningful.</em></>} />
          <div className="contact-glass">
            <div className="contact-glow contact-glow-a" />
            <div className="contact-glow contact-glow-b" />
            <div className="contact-float contact-float-1">✦</div>
            <div className="contact-float contact-float-2">✦</div>
            <div className="contact-float contact-float-3" />

            <div className="contact-grid">
              <div className="contact-left">
                <p className="contact-intro">{isFa ? 'یک ایده، یک سوال یا فقط سلام؟ صندوق ورودی من همیشه باز است.' : 'An idea, a question, or just a hello? My inbox is always open.'}</p>
                <form className="contact-form" onSubmit={(e) => { e.preventDefault(); showToast(isFa ? 'پیام شما آماده ارسال شد.' : 'Your message is ready to send.'); }}>
                  <div className="form-row">
                    <input type="text" placeholder={isFa ? 'نام' : 'Name'} aria-label={isFa ? 'نام' : 'Name'} />
                    <input type="email" placeholder={isFa ? 'ایمیل' : 'Email'} aria-label={isFa ? 'ایمیل' : 'Email'} />
                  </div>
                  <textarea placeholder={isFa ? 'پیام شما' : 'Your message'} aria-label={isFa ? 'پیام' : 'Message'} rows={4} />
                  <button type="submit" className="button button-primary contact-submit">
                    {isFa ? 'ارسال پیام' : 'Send message'} <Send size={16} />
                  </button>
                </form>
              </div>

              <div className="contact-right">
                <ContactRow icon={Mail} label={isFa ? 'ایمیل' : 'EMAIL'} value="r.tasviechi@gmail.com" copyValue={() => copyValue('r.tasviechi@gmail.com', 'email')} copied={copied === 'email'} />
                <ContactRow icon={Phone} label={isFa ? 'تلفن' : 'PHONE'} value="09106730835" copyValue={() => copyValue('09106730835', 'phone')} copied={copied === 'phone'} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a href="#home" className="brand">RT<i>®</i></a>
          <nav className="footer-nav">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <div className="footer-socials">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="footer-social-bare"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-made">{isFa ? ' MADE WHIT 🩶 BY REZA ' : 'Made with 🩶 By ReZa'}</span>
          <span>2025 / <span className="footer-purple">TEHRAN</span></span>
        </div>
      </footer>

      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={isFa ? 'بازگشت به بالا' : 'Back to top'}>
          <ArrowUp size={18} />
        </button>
      )}

      {toast && <div className="toast"><Check size={15} /> {toast}</div>}
      <button className="shortcut-hint" onClick={handleSubmit} aria-label={isFa ? 'میانبر کیبورد' : 'Keyboard shortcut'}><kbd>⌘</kbd><span>+</span><kbd>K</kbd></button>
    </div>
  );
}

function SectionHeading({ kicker, title, action }: { kicker: string; title: React.ReactNode; action?: string }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {action && <a className="heading-action" href="#projects">{action} <ArrowUpRight size={15} /></a>}
    </div>
  );
}


function SkillCard({ title, titleEn, label, items, isFa }: { title: string; titleEn: string; label: string; items: (string | number)[][]; isFa: boolean }) {
  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <span className="skill-card-label">{label}</span>
      </div>
      <h3>{isFa ? title : titleEn}</h3>
      {items.map(([name, value]) => {
        const BrandIcon = brandIcons[name as string];
        return (
          <div className="skill-row" key={name as string}>
            <div className="skill-name">
              <span className="skill-name-left">
                {BrandIcon && <span className="skill-brand"><BrandIcon size={18} /></span>}
                {name as string}
              </span>
              <b>{value}%</b>
            </div>
            <div className="progress-bar"><i style={{ width: `${value}%` }} /></div>
          </div>
        );
      })}
    </div>
  );
}

function BadgeGroup({ title, icon: Icon, items }: { title: string; icon: IconType; items: string[] }) {
  return (
    <div className="badge-group">
      <div className="badge-title"><Icon size={16} /> {title}</div>
      <div className="badges">
        {items.map((item) => {
          const BrandIcon = brandIcons[item];
          return (
            <span key={item} className="badge-item">
              {BrandIcon && <span className="badge-brand"><BrandIcon size={16} /></span>}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({ number, title, titleEn, en, type, typeFa, stack, color, description, descriptionEn, isFa }: { number: string; title: string; titleEn: string; en: string; type: string; typeFa: string; stack: string[]; color: string; description: string; descriptionEn: string; isFa: boolean }) {
  return (
    <article className={`project-card project-${color}`}>
      <div className="project-visual">
        <div className="visual-top">
          <span>{number}</span>
          <span className="project-arrow"><ArrowUpRight size={20} /></span>
        </div>
        <div className="mock-window">
          <div className="mock-dots"><i /><i /><i /></div>
          <div className="mock-lines"><b /><b /><b /><b /></div>
          <div className="mock-shape" />
        </div>
        <div className="visual-word">{en}</div>
      </div>
      <div className="project-info">
        <div>
          <span className="project-type">{isFa ? typeFa : type}</span>
          <h3>{isFa ? title : titleEn}</h3>
          <p>{isFa ? description : descriptionEn}</p>
        </div>
        <div className="project-bottom">
          <div className="stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="project-links">
            <a href="#contact" aria-label={isFa ? 'دمو زنده' : 'Live demo'}><ExternalLink size={15} /></a>
            <a href="#contact" aria-label="GitHub"><GitBranch size={15} /></a>
          </div>
        </div>
      </div>
    </article>
  );
}

function TimelineItem({ year, company, role, date, current }: { year: string; company: string; role: string; date: string; current?: boolean }) {
  return (
    <div className={`timeline-item ${current ? 'current' : ''}`}>
      <div className="timeline-marker"><span>{current ? 'NOW' : year.split(' — ')[0]}</span></div>
      <div className="timeline-content">
        <div className="timeline-year">{year}</div>
        <h3>{company}</h3>
        <p>{role}</p>
        <span>{date}</span>
      </div>
    </div>
  );
}

function FloatingLove({ icon: Icon, label, className }: { icon: IconType; label: string; className: string }) {
  return (
    <div className={`floating-love ${className}`}>
      <div><Icon size={23} /></div>
      <span>{label}</span>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, copyValue, copied }: { icon: IconType; label: string; value: string; copyValue: () => void; copied: boolean }) {
  return (
    <div className="contact-row">
      <div className="contact-icon"><Icon size={17} /></div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <button onClick={copyValue} aria-label={`Copy ${label}`}>{copied ? <Check size={16} /> : <Copy size={16} />}</button>
    </div>
  );
}

function PixelScene({ isFa }: { isFa: boolean }) {
  return (
    <div className="pixel-scene">
      <div className="scene-orbit" />
      <div className="scene-grid" />
      <div className="pixel-star star-a">✦</div>
      <div className="pixel-star star-b">✦</div>
      <div className="pixel-planet"><span /></div>
      <div className="pixel-cat">
        <div className="cat-ear left" />
        <div className="cat-ear right" />
        <div className="cat-face"><i /><i /><b /></div>
        <div className="cat-tail" />
      </div>
      <div className="scene-code">&lt;design<br /><span>/create</span>&gt;</div>
      <div className="pixel-block block-a" />
      <div className="pixel-block block-b" />
      <div className="scene-caption">{isFa ? 'بازی / خلق / تکرار' : 'PLAY / CREATE / REPEAT'}</div>
    </div>
  );
}

export default App;
