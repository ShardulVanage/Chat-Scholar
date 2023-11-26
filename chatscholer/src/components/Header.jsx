import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'


import en from '../locales/en';
import ch from '../locales/ch';

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : ch;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className=' border-slate-400 mr-12 ml-2 py-2' />
            <div className=' flex-col justify-between items-start flex '>
           <label htmlFor="Language" className="ml-2 block text-sm font-semibold leading-6 text-gray-900">
            Language
           </label>
           <select
             onChange={changeLanguage}
             defaultValue={locale}
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        
            >
        
              <option value="en">English</option>
             <option value="ch">Chinese</option>
           </select>
           </div>

            <hr className="m-2 border-slate-300/40" />
           
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : ch;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-evenly">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home" >
<div className='flex flex-row justify-center items-center'>
<Logo className="h-10 w-auto" />
              <h1 className='font-mono'><span className='font-extrabold text-xl '>Chat</span><span className='text-blue-600 text-lg font-semibold'>Scholar</span></h1>
</div>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            
           <div className=' flex-row justify-between items-center hidden md:flex '>
           <label htmlFor="Language" className="mr-2 block text-sm font-medium leading-6 text-gray-900">
        Language
      </label>
      <select
      onChange={changeLanguage}
      defaultValue={locale}
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        
      >
        
        <option  value="en">English</option>
        <option value="ch">Chinese</option>
      </select>
           </div>
            
            </div>
          <div>
      
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
