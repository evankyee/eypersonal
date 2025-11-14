import { siteConfig } from '@/config'

export default function Links() {
  const links = [
    {
      title: 'Email',
      href: `mailto:${siteConfig.author.email}`,
      description: 'Get in touch'
    },
    {
      title: 'GitHub',
      href: siteConfig.social.github,
      description: 'Code and projects'
    },
    {
      title: 'LinkedIn',
      href: siteConfig.social.linkedin,
      description: 'Professional background'
    },
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-light tracking-tight">Links</h2>
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                →
              </span>
              <div>
                <span className="font-medium">{link.title}</span>
                <span className="text-charcoal/40 ml-2 text-sm">
                  {link.description}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

