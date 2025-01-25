import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ThemeSwitcher } from '@/components/theme-switcher'

const Navbar = () => {
  return (
    <header className='fixed left-0 top-0 z-[999] w-full border-2 border-b-border bg-bg px-5 py-3 dark:bg-darkBg '>
      <div className='container mx-auto flex w-full justify-between'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            height={40}
            width={40}
            alt='Company Logo'
            className='dark:invert'
          />
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex h-full items-center gap-12'>
            <li>
              <Link href='/blogs'>Blogs</Link>
            </li>

            <li>
              <Link href='/tags'>Tags</Link>
            </li>

            <li>
              <Link href='/contact'>Contact</Link>
            </li>

            <ThemeSwitcher />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
