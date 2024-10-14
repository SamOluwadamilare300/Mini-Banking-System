      "use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
// import { CiBank } from 'react-icons/ci'
import { Cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname()

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2'>
          <Image
            src='/icons/logo.svg'
            alt='logo'
            width={34}
            height={34}
            className='w-[24px] h-[24px] max-xl:w-[14px] max-xl:h-[14px]'
          />
          <h1 className='sidebar-logo'>StocX</h1>
        </Link>

        {/* Mapping through sidebar links */}
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`)
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={Cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                 <Image src={item.imgURL} width={35} height={35}
                 alt={item.label}
                 className={Cn ({'brightness-[3] invert-0' : isActive })}
                  />
              </div>
              <p className={Cn('sidebar-label', { '!text-white': isActive })}>
                  {item.label}
              </p>
            </Link>
          )
        })}
        USER

      </nav>

      FOOTER
    </section>
  )
}

export default SideBar
