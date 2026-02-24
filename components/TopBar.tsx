export default function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-between bg-forest-900 text-white/60 text-xs px-14 h-10 border-b border-white/5">
      {/* Social */}
      <div className="flex items-center gap-1.5">
        <a
          href="https://www.facebook.com/molansteel.co"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/MolanSteel_co"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/molansteel.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+966530018050"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/molansteelco/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      {/* Contact info */}
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <svg
            className="text-forest-300"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 014.99 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006.14 6.14l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <a href="tel:+966530018050" className="hover:text-forest-300 transition-colors">
            966530018050+
          </a>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="text-forest-300"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <a
            href="mailto:info@molansteel.com"
            className="hover:text-forest-300 transition-colors"
          >
            info@molansteel.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="text-forest-300"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>الرياض - السلي - شارع هارون الرشيد</span>
        </div>
      </div>
    </div>
  );
}
