import Logo from "./Logo.svg";
import "./navbar.css";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";


const navigation = [
  { name: "About", number: "01. ", href: "/About", current: false },
  { name: "Projects", number: "02. ", href: "/projects", current: false },
  { name: "Contact", number: "03.", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="navbar shadow-xl">
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
                          item.current ? "  nav" : " nav1",
                          "px-3 py-2 rounded-md text-sm "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <a className="text-laser">{item.number}</a>

                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a 
href="data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9UaXRsZSAoUGFwYURpb3BfcmVzdW1lICkKL1Byb2R1Y2VyIChTa2lhL1BERiBtMTAxIEdvb2dsZSBEb2NzIFJlbmRlcmVyKT4+CmVuZG9iagozIDAgb2JqCjw8L2NhIDEKL0JNIC9Ob3JtYWw+PgplbmRvYmoKMTAgMCBvYmoKPDwvRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDYzNTQ+PiBzdHJlYW0KeJztXVuu5LgN/b+rqA3E0fsBBAG6e+bOd4LeQZIJECAfSfYPhK5ry7KtY4m2q271jGeAZNDqsi2KIg+pQ0reBP37B0n/46O6/e3fb/9567y9/+n4//SH8tb/+9dfbh//8d9/vv3xF3375//e+vEg3U0K627//cfbr29/WT1B207bGIPtnzT87uv3tz++m5uSne7/Mbfvv77J8Vu0C533wYeb6YyP9I+9ff/3Wz/mbt//fvuTEOrrn2/f//UWuyi08SrSDz8GhLkPSNVFpaM208iOnwh9HzFdUNIbF6aB94+f6M4Y44yUaUTG+4jtXHBSSju9fngLTUlp64JfftjP3wuys/RuILteFjOh6S5IIxwJzXmvQy/UD6Gp8UXv44vGR8hO9uKNYf4oT8viHa1o6NT9UWF4VOj0/e+7+aR8Z52lH5hJDG4Qg9QmBD9NVothwOooSRDTgB+Wx0ntfFiujiONiNIYPYnt52FAxWC0zN4tl9OcS8ooQb/RMWBJrR9RlpRRoRMxuAZJqUFS2kUpRaYwfhiQKnir/VKTSCuDciJTJPgkOYjWWC/7L6kODCIsap4XnRMlzbM3Uvv7rtUzWdBHdiII08u7U9pYN23b9CXh/kISjjDCkNjS6n8bFlMH2h5yGnB+2IKO/jrtwvqA/Zit7oQNnv7e9IswiEGRqGWmSfanQaJCBUvGYRr4Og6Qpns5GYbw0/AOrazV0xIMBoPeLbXMB4ZFCyRTbUSYlkDHYeImmmAzvY+jRGg7RK1M/R3fvow7xVrp1SSRbwoNWDAQ3wfh3hc0E9U3w36HZr/DoUfBl0vuV0EhDmKnLdEJ5/ztrum3LvTOb/En5AU3N4RRvePw2m1siMGRhLt1UaJBi6GyOgOUFQ58/RAC2bYobVRGrreKcFr4OGml+zIsGnk9I8hepgG0VYxHA6Pmu34FxPSOYde5jhCAdyHWXx7FuB0dmbgwDdiPX0hBTtdalb3di+ElZGd9zOULBR+5A3CG8HvhL6AU3QZ4iCoDXi3q3GTmY+ykJQB1050yvWXzS6XGkoKyRdpjR0V0inRUmAOS4r8cL5MdQYyy0rjJN2NPkhSR3FUIGWCMX0ekZAhA2CPCgo+CFgC7XfYvdsi9YslIp8Vd60hXP/6janGN6mEXIRyom2fadys7S27b47eZ9xGj0nrEDKthkIJsnBXbFqBgYNEafq"


                  type="button"
                  className="transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300 mr-8 resume bg-transparent  text-laser font-semibold hover:text-white py-1.5 px-7  hover:border-transparent rounded"
                >
                  Resume
                </a>

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
                  ></Transition>
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
                    item.current
                      ? "text-center bg-gray-900 text-white"
                      : " text-center text-gray-300 hover:bg-gray-700  hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-bold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  smooth={true}
                  duration={1000}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
