import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { userIcon, logoIcon, searchIcon } from '@/assets'
import { Container } from '@/components/container'
import { cn } from '@/lib/utils'

const menu = [
  {
    href: '',
    title: 'Início',
  },

  {
    href: '',
    title: 'Benefícios',
  },

  {
    href: '',
    title: 'Para quem é o curso?',
  },

  {
    href: '',
    title: 'Preços promocionais',
  },

  {
    href: '',
    title: 'sobre nós',
  },
]

export const Header: FC = () => {
  return (
    <header className="bg-instasany-brand-dark relative flex h-24 w-full items-center">
      <Container className="flex items-center justify-between">
        <Image alt="" src={logoIcon} />

        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {menu.map((link, index) => (
              <Link
                className={cn(
                  'px-3 py-1 text-white/40 hover:text-white hover:transition-all',
                  `${
                    index === 0
                      ? ' bg-instasany-brand-light rounded-full text-white'
                      : ''
                  } `,
                )}
                key={index}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button>
              <Image alt="" src={searchIcon} />
            </button>

            <button className="flex items-center gap-2">
              <Image alt="" src={userIcon} />
              <span className="font-medium text-white">Fazer login</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
