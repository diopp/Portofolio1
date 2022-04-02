import Logo from './Logo.svg';
import './navbar.css'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', number:"", href: '#', current: true },
  { name: 'Projects', number:"01. ", href: '#', current: false },
  { name: 'About', number:"02. ", href: '#', current: false },
  { name: 'Contact', number:"03.", href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ">
                  <img
                    className=" Logo1 block lg:hidden h-10 w-auto pr-8"
                    src={Logo}
                    alt="Workflow"
                  />
                  <img
                    className=" Logo hidden lg:block h-8 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>

                
                <div className="hidden sm:block sm:ml-6">
                  
                  <div className="flex space-x-4 nav">



                    
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? '  nav' : ' nav1',
                          'px-3 py-2 rounded-md text-sm '
                          
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <a className='text-laser'>{item.number}</a>
                        
                        { item.name}
                      </a>



                      
                    ))}
                 
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
              <button
                  type="button"
                  className=" mr-8 resume bg-transparent  text-laser font-semibold hover:text-white py-1.5 px-7  hover:border-transparent rounded"
                >
                 Resume
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className=" relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                     
                    </Menu.Button>

              

                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >

                    
             
                  </Transition>
      
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-center bg-gray-900 text-white' : ' text-center text-gray-300 hover:bg-gray-700  hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}


              
            </div>
            
          </Disclosure.Panel>
          
        </>
        
      )}
    </Disclosure>
  )
}
