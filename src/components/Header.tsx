import React, { useState } from 'react'
import { clsx } from 'clsx'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useMediaQuery } from 'react-responsive'
import { Disclosure } from '@headlessui/react'
import { BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const isMobile = useMediaQuery({ maxWidth: 640 })

  return (
    <Disclosure
      as="header"
      className={clsx(
        'sticky top-0 z-50 flex flex-col items-center justify-between px-8 py-4 sm:flex-row sm:bg-zinc-900/40 sm:backdrop-blur-sm md:px-28 lg:px-40',
        {
          'bg-zinc-900/30 backdrop-blur-sm transition-all':
            scrollPosition >= 20,
        },
      )}
    >
      <div className="flex w-full items-center justify-between">
        <p>Python Norte 2025</p>

        {isMobile ? (
          <Disclosure.Button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">
              {isOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {isOpen ? (
              <CgClose className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <BiMenu className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        ) : (
          <nav>
            <ul className="flex space-x-8 text-white md:space-x-16 lg:space-x-24">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cdc" className="hover:text-gray-300">
                  Código de Conduta
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {isMobile && isOpen && (
        <Disclosure.Panel className="mt-8 w-full sm:hidden">
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cdc" className="hover:text-gray-300">
                Código de Conduta
              </Link>
            </li>
          </ul>
        </Disclosure.Panel>
      )}
    </Disclosure>
  )
}
