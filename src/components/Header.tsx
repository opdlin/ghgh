import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onPartnerAction: () => void;
}

const NAV_LINKS = [
  { label: 'Why ODPL', href: '#about' },
  { label: 'Segments', href: '#businesses' },
  { label: 'Technology', href: '#technology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ onPartnerAction }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[#0B1528] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA6A20] rounded-sm"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect x="2" y="2" width="28" height="28" rx="4" fill="#0B1528" />
            <path
              d="M8.5 22.5V12.5L16 7.5L23.5 12.5V22.5"
              stroke="#EA6A20"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 22.5V16H19.5V22.5"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-[var(--font-display)] text-lg font-semibold tracking-tight">
            Omendra Developers
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#0B1528] underline-offset-8 hover:underline decoration-[#EA6A20] decoration-2 transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA6A20]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onPartnerAction}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0B1528] hover:bg-[#162744] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA6A20]"
          >
            Partner With Us
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#0B1528] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1528] rounded-md"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPartnerAction();
              }}
              className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1528] hover:bg-[#162744] rounded-md transition-colors cursor-pointer"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
