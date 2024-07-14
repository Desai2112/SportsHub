'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Disclosure, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#e4e5ea]  w-full fixed top-0 left-0 right-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between mt-0">
        <div className="flex flex-1">
          <a href="#" className="p-1.5 px-4">
            <img alt="" src="https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png" className="h-14 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="home" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-600 bg-white rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            Home
          </Link>
          <Link to="premises" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-600 bg-white rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            Our Premises
          </Link>
          <Link to="sports" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-600 bg-white rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            Sports
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-600 bg-white rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            About Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-600 bg-white rounded-md px-4 py-2 mr-6 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-0 z-10 overflow-y-auto bg-green-100 px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="p-1.5">
              <span className="sr-only">Sports Booking</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    <Link to="hero" smooth={true} duration={500} className="block w-full h-full">
                      Product
                    </Link>
                  </Disclosure.Button>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sports
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 my-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar;
