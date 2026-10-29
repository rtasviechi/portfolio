import type { SVGProps, ReactElement } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps) {
  return { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...props };
}

export function ExcelIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" opacity=".22" />
      <path d="M14 2v6h6l-6-6Z" opacity=".5" />
      <path d="M8.5 11.5 11 15l-2.5 3.5h1.8l1.7-2.3 1.7 2.3h1.8L13 15l2.5-3.5h-1.8L12 13.3l-1.7-1.8H8.5Z" />
    </svg>
  );
}

export function WordIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" opacity=".22" />
      <path d="M14 2v6h6l-6-6Z" opacity=".5" />
      <path d="M7 11.5 8.5 17h1.2l1.3-4.2L12.3 17h1.2L15 11.5h-1.3l-.8 3.8-1.2-3.8h-1.1l-1.2 3.8-.8-3.8H7Z" />
    </svg>
  );
}

export function PowerPointIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" opacity=".22" />
      <path d="M14 2v6h6l-6-6Z" opacity=".5" />
      <path d="M9 11v7h1.3v-2.5h1c1.8 0 3-1 3-2.25S13.1 11 11.3 11H9Zm1.3 1.1h1c.9 0 1.4.4 1.4 1.15s-.5 1.1-1.4 1.1h-1v-2.25Z" />
    </svg>
  );
}

export function PhotoshopIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" opacity=".22" />
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 11v6h1.3v-2.3h.6c1.5 0 2.6-.8 2.6-2.1s-1.1-1.9-2.6-1.9H8Zm1.3 1.05h.7c.8 0 1.2.3 1.2.95s-.4 1-1.2 1h-.7v-1.95ZM16.5 11.2c-.4-.15-.85-.2-1.35-.2-1.3 0-2.15.7-2.15 1.75 0 .9.5 1.3 1.65 1.65.8.25 1.05.4 1.05.65 0 .3-.3.5-.75.5-.5 0-.95-.15-1.35-.4-.15-.1-.3-.05-.3.15v.95c0 .15.05.25.2.3.4.2.9.3 1.5.3 1.4 0 2.2-.7 2.2-1.85 0-.9-.5-1.35-1.65-1.7-.85-.25-1.05-.4-1.05-.6 0-.25.25-.4.7-.4.45 0 .85.1 1.25.3.15.05.3 0 .3-.15v-.85c0-.15-.05-.25-.25-.3Z" />
    </svg>
  );
}

export function IllustratorIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" opacity=".22" />
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.5 17 9.2 15.5H7.8L7.5 17H6.2l1.5-6c.05-.2.15-.3.35-.3h1.4c.2 0 .3.1.35.3l1.5 6h-1.3ZM8 14.4h1l-.5-2.2-.5 2.2ZM13.5 9c0-.4.3-.65.7-.65s.7.25.7.65-.3.65-.7.65-.7-.25-.7-.65ZM13.6 11h1.2v6h-1.2v-6Z" />
    </svg>
  );
}

export function PremiereIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" opacity=".22" />
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 11v6h1.3v-2.4h.8c1.6 0 2.7-.85 2.7-2.2S11.7 10.4 10.1 10.4c-.7 0-1.4.05-2.1.05V11Zm1.3-1.05c.3-.05.6-.05.9-.05.8 0 1.3.4 1.3 1.1s-.5 1.1-1.3 1.1h-.9v-2.15ZM15.5 11.3c-.35-.2-.8-.3-1.3-.3-1.2 0-2 .7-2 1.7 0 .85.5 1.3 1.65 1.7.8.25 1.05.4 1.05.65 0 .3-.25.45-.7.45-.45 0-.9-.15-1.3-.4-.15-.1-.3-.05-.3.15v.85c0 .15.05.25.25.3.4.2.85.3 1.45.3 1.3 0 2.1-.7 2.1-1.8 0-.9-.5-1.35-1.65-1.75-.85-.25-1.05-.4-1.05-.6 0-.25.2-.4.65-.4.4 0 .8.1 1.15.3.15.05.3 0 .3-.15v-.8c0-.15-.05-.25-.25-.3Z" />
    </svg>
  );
}

export function FigmaIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M8.5 22a2.5 2.5 0 0 0 2.5-2.5V17H8.5a2.5 2.5 0 0 0 0 5Z" opacity=".4" />
      <path d="M6 14.5A2.5 2.5 0 0 1 8.5 12H11v5H8.5A2.5 2.5 0 0 1 6 14.5Z" opacity=".6" />
      <path d="M6 7A2.5 2.5 0 0 1 8.5 4.5H11v5H8.5A2.5 2.5 0 0 1 6 7Z" />
      <path d="M11 4.5h2.5a2.5 2.5 0 0 1 0 5H11v-5Z" opacity=".6" />
      <path d="M16 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" opacity=".4" />
      <path d="M16 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" opacity=".8" />
    </svg>
  );
}

export function HtmlIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M4 2 5.7 20.5 12 22l6.3-1.5L20 2H4Z" opacity=".22" />
      <path d="M12 4 6.5 4.5 7 17l5 1.4 5-1.4.3-3.5h-1.3l-.2 2.3-3.8 1-3.8-1-.2-2h7.8l.3-5.5H6.6L6.5 5.5H17.4L17 8H8l.2 2h8.6Z" />
    </svg>
  );
}

export function CssIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M4 2 5.7 20.5 12 22l6.3-1.5L20 2H4Z" opacity=".22" />
      <path d="M12 4 6.5 4.5 7 17l5 1.4 5-1.4.3-3.5h-1.3l-.2 2.3-3.8 1-3.8-1-.15-1.8h1.3l.1 1 3.55.9 3.55-.9.25-2.8H7.9L7.7 7h9.5l-.2 1.5H8l.15 1.5h8.7Z" />
    </svg>
  );
}

export function JsIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" opacity=".18" />
      <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity=".5" />
      <path d="M8 16.5c0 1.2-.7 1.8-1.8 1.8-.9 0-1.5-.4-1.8-1.1l1-.6c.2.4.4.6.75.6.35 0 .55-.2.55-.65V10.5H8v6ZM13.5 16.6c.35.7 1 1.2 2 1.2 1.1 0 1.8-.55 1.8-1.5 0-.9-.55-1.25-1.65-1.7l-.55-.25c-.85-.35-1.25-.65-1.25-1.35 0-.7.55-1.2 1.35-1.2.6 0 1.05.25 1.4.8l.85-.55c-.45-.75-1.1-1.05-2.25-1.05-1.25 0-2.1.8-2.1 1.9 0 1.05.6 1.55 1.7 2l.55.25c.9.4 1.3.7 1.3 1.35 0 .6-.5 1-1.3 1-.75 0-1.25-.35-1.55-.95l-1 .5Z" />
    </svg>
  );
}

export function ReactIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function WordPressIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <circle cx="12" cy="12" r="11" opacity=".18" />
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity=".5" />
      <path d="M4 12c0 3 1.7 5.6 4.2 7L4.9 8.2A8 8 0 0 0 4 12Zm12 0c0-.9-.3-1.5-.6-2.1-.4-.65-.7-1.15-.7-1.8 0-.7.5-1.35 1.3-1.35h.1A8 8 0 0 0 4.8 7.3h.4c.8 0 2-.1 2-.1.45-.05.5-.65.05-.7 0 0-1.15.1-1.9.1 1.4-2 3.7-3.3 6.4-3.3 2 0 3.7.8 5 2.1h-.15c-.8 0-1.35.65-1.35 1.35 0 .65.4 1.15.8 1.8.3.6.65 1.2.65 2.1 0 .65-.25 1.4-.55 2.4l-.75 2.5L11.6 8.5c.45-.05.85-.05.85-.05.4-.05.35-.7-.05-.7 0 0-1.15.1-1.9.1-1.15 0-1.9-.1-1.9-.1-.4-.05-.45.65-.05.7l.85.1 1.25 3.4-1.75 5.3L7.9 8.5c.45-.05.85-.05.85-.05.4-.05.35-.7-.05-.7 0 0-1.15.1-1.9.1l-.05-.05c1.45.05 3 .05 3 .05 1.15 0 1.9-.05 1.9-.05Z" />
      <path d="m12.3 13 2.2 6a8 8 0 0 0 4-5.3c-.5.1-1 .15-1.5.15-1.6 0-3.2-.35-4.7-1Z" />
    </svg>
  );
}

export function SeoIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <path d="M8 11.5 10.5 14 15 9" strokeWidth="2" />
    </svg>
  );
}

export function DigitalMarketingIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v2a1 1 0 0 0 1 1h2l3 4V6L6 10H4a1 1 0 0 0-1 1Z" fill="currentColor" stroke="none" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12" />
    </svg>
  );
}

export function VsCodeIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M17.5 2 7 11.5 4 9 2 10v4l2 1 3-2.5L17.5 22l4.5-2V4l-4.5-2Z" opacity=".25" />
      <path d="M17.5 2 7 11.5 4 9 2 10v4l2 1 3-2.5L17.5 22l4.5-2V4l-4.5-2Zm0 4.5v11L12 12l5.5-5.5ZM4 11.5 6 13l-2 1.5v-3Z" />
    </svg>
  );
}

export function GitIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="9" r="2.5" />
      <path d="M6 8.5v7M8.5 6h6a3 3 0 0 1 3 3" />
    </svg>
  );
}

export function GitHubIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function ChatGptIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M12 3 9 4.5v3L6 9v3L4.5 12 6 13.5v3l3 1.5v3l3 1.5 3-1.5v-3l3-1.5v-3L19.5 12 18 10.5v-3L15 6V4.5L12 3Z" opacity=".3" />
      <path d="M12 3 9 4.5v3L6 9v6l3 1.5v3l3 1.5 3-1.5v-3l3-1.5V9l-3-1.5v-3L12 3Zm0 2.5 2 1v2l-2 1-2-1v-2l2-1ZM8 10l2 1v2l-2 1-2-1v-2l2-1Zm8 0 2 1v2l-2 1-2-1v-2l2-1Zm-4 4 2 1v2l-2 1-2-1v-2l2-1Z" />
    </svg>
  );
}

export function ClaudeIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M12 4c-1 2-2.5 3-4.5 3 0 2-1 3-3 3.5 1 1 1.5 2 1.5 3.5 2 0 3.5.5 5 2 1.5-1.5 3-2 5-2 0-1.5.5-2.5 1.5-3.5-2-.5-3-1.5-3-3.5-2 0-3.5-1-4.5-3Z" opacity=".35" />
      <path d="M12 7c-.7 1.5-2 2.3-3.7 2.3 0 1.7-.8 2.7-2.3 3 1 .8 1.3 1.8 1.3 3.2 1.7 0 2.8.5 4 1.5 1.2-1 2.3-1.5 4-1.5 0-1.4.3-2.4 1.3-3.2-1.5-.3-2.3-1.3-2.3-3-1.7 0-3-.8-3.7-2.3Z" />
    </svg>
  );
}

export function GeminiIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M12 2c.3 4.8 3.2 8.7 8 9-4.8.3-7.7 4.2-8 9-.3-4.8-3.2-8.7-8-9 4.8-.3 7.7-4.2 8-9Z" opacity=".3" />
      <path d="M12 5c.25 3.5 2.5 6.25 6 6.5-3.5.25-5.75 3-6 6.5-.25-3.5-2.5-6.25-6-6.5 3.5-.25 5.75-3 6-6.5Z" />
    </svg>
  );
}

export function LovableIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M12 21s-7-4.5-9.5-9C1 9 2 5.5 5.5 5.5c2 0 3.2 1 4 2.2.8-1.2 2-2.2 4-2.2C17 5.5 18 9 16.5 12 14 16.5 12 21 12 21Z" opacity=".35" />
      <path d="M12 21s-7-4.5-9.5-9C1 9 2 5.5 5.5 5.5c2 0 3.2 1 4 2.2.8-1.2 2-2.2 4-2.2C17 5.5 18 9 16.5 12 14 16.5 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function BoltIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" opacity=".35" />
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" opacity=".22" />
      <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 9h2.5v8H7V9Zm1.25-4a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9ZM11.5 9h2.4v1.1h.04c.33-.6 1.15-1.23 2.36-1.23 2.52 0 3 1.66 3 3.82V17h-2.5v-3.5c0-.83-.02-1.9-1.16-1.9-1.16 0-1.34.9-1.34 1.84V17h-2.5V9Z" />
    </svg>
  );
}

export function TelegramIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M21.5 4.5 3 11.2c-.8.3-.8 1.4 0 1.6l4.6 1.5 1.7 5.4c.2.7 1.1.9 1.6.3l2.4-2.5 4.6 3.4c.6.4 1.4.1 1.6-.6L23 5.6c.2-.9-.7-1.6-1.5-1.1Z" opacity=".35" />
      <path d="M21.5 4.5 3 11.2c-.8.3-.8 1.4 0 1.6l4.6 1.5 8-5M9.3 14.3l1.7 5.4c.2.7 1.1.9 1.6.3l2.4-2.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const brandIcons: Record<string, (p: IconProps) => ReactElement> = {
  Excel: ExcelIcon, Word: WordIcon, PowerPoint: PowerPointIcon,
  Photoshop: PhotoshopIcon, Illustrator: IllustratorIcon, 'Premiere Pro': PremiereIcon,
  Figma: FigmaIcon, HTML: HtmlIcon, CSS: CssIcon, JavaScript: JsIcon, React: ReactIcon,
  WordPress: WordPressIcon, SEO: SeoIcon, 'Digital Marketing': DigitalMarketingIcon,
  'VS Code': VsCodeIcon, Git: GitIcon, GitHub: GitHubIcon,
  ChatGPT: ChatGptIcon, Claude: ClaudeIcon, Gemini: GeminiIcon, Lovable: LovableIcon, 'Bolt.new': BoltIcon,
};
