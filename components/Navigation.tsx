'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'About' },
    { href: '/blog', label: 'Writing' },
  ]

  return (
    <nav className="border-b border-charcoal/10">
      <div className="container mx-auto px-6 py-4 md:py-6 max-w-6xl">
        <ul className="flex gap-6 md:gap-8 text-sm font-light tracking-wide">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={pathname === link.href ? 'opacity-100' : 'opacity-40'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

