import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import classNames from '../utils/classNames.js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ClickAwayListener from 'react-click-away-listener'

const navigation = [
  { name: 'Home', href: '/', current: false },
  // { name: 'Blogs', href: '/blogs', current: false },
  { name: 'About Us', href: '/about-us', current: false },
]

export default function Navbar({ isTransparentNav }) {
  const [isTransparent, setIsTransparent] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  const handleClickAway = () => {
    document.getElementById('close')?.click()
  }

  const redirectToHome = () => {
    router.push('/')
  }
  const defaultNavClass = 'fixed top-0 left-0 right-0 w-full duration-300 z-20'
  return (
    <Disclosure
      defaultOpen={false}
      as="nav"
      id="navbarTop"
      className={classNames(
        isTransparent ? 'bg-transparent' : 'bg-white shadow-2xl',
        defaultNavClass
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center text-black justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div
                  className="flex-shrink-0 flex items-center cursor-pointer"
                  onClick={redirectToHome}
                >
                  <Image src={'/images/logo.png'} height={50} width={80} />
                </div>

                <div className="hidden md:block md:ml-6 w-full">
                  <div className="flex space-x-4 items-end justify-items-end justify-end">
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <a
                          className="text-black hover:font-bold
                          px-4 py-3.5 rounded-md text-lg font-normal"
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Disclosure.Panel
              defaultOpen={true}
              className="md:hidden bg-white -mt-24 w-1/2 z-30 absolute"
              style={{
                marginLeft: '50%',
              }}
            >
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md absolute right-5 top-5 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <div id="close">
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  </div>
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              <div className="px-2 pt-2 pb-3">
                {navigation.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <a
                      className={classNames(
                        item.current
                          ? ' text-black'
                          : 'text-black  hover:text-black',
                        'block px-3 py-2 rounded-md text-base font-medium text-center duration-300'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </ClickAwayListener>
        </>
      )}
    </Disclosure>
  )
}
