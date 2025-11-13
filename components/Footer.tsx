import { siteConfig } from '@/config'

export default function Footer() {
  const socialLinks = [
    { href: siteConfig.social.twitter, label: 'X' },
    { href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { href: siteConfig.social.github, label: 'GitHub' },
  ]

  return (
    <footer className="border-t border-charcoal/10 mt-16 md:mt-24">
      <div className="container mx-auto px-6 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-charcoal/40 font-light">
          <span>{siteConfig.footer.text}</span>
          <div className="flex gap-4 md:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-charcoal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

