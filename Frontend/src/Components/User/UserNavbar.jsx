import { useState } from "react";
import { Dialog, DialogPanel, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const UserNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:5000/auth/logout",{
        withCredentials:true,
      });
      toast.success("Logged out successfully", {
        position: "top-right", // Position for toaster
      });
      navigate("/login"); // Redirect user to login page after logout
    } catch (error) {
      toast.error("Logout failed. Please try again.", {
        position: "top-right", // Position for toaster
      });
    }
  };

  return (
    <header className="bg-blue-900 text-white w-full fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-2 lg:px-6"
      >
        <div className="flex flex-1 items-center">
          <a className="p-1.5">
            <img
              alt="Company Logo"
              src="https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png"
              className="h-12 w-auto"
            />
          </a>
          <div className="hidden lg:flex lg:gap-x-12 ml-6">
            <Link
              to="/user"
              className="text-base font-semibold leading-6 hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/user/complex"
              className="text-base font-semibold leading-6 hover:text-blue-300 transition duration-300 ease-in-out"
            >
              All Complexes
            </Link>
            <Link
              to="/user/my-bookings"
              className="text-base font-semibold leading-6 hover:text-blue-300 transition duration-300 ease-in-out"
            >
              My Bookings
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center relative">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center space-x-2 text-sm font-semibold leading-6 hover:text-blue-300 transition duration-300 ease-in-out focus:outline-none"
          >
            <img
              alt="Profile"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="h-8 w-8 rounded-full"
            />
            <ChevronDownIcon className="h-5 w-5" />
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 top-12 mt-2 w-64 bg-white text-blue-900 rounded-lg shadow-lg z-50">
              <Link
                to="/user/profile"
                className="block px-6 py-3 text-lg hover:bg-blue-100 flex items-center"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422A12.084 12.084 0 0021 9.883M12 14l-6.16-3.422A12.084 12.084 0 013 9.883M12 14v10m0-10l6.16-3.422M12 14l-6.16-3.422M5.86 16.458L3 9.883M18.14 16.458L21 9.883"
                  ></path>
                </svg>
                Profile
              </Link>
              <Link
                onClick={handleLogout}
                className="block px-6 py-3 text-lg hover:bg-blue-100 flex items-center"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                Log out
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-blue-900 bg-opacity-80" />
        <DialogPanel className="fixed inset-0 z-20 bg-blue-800 px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="p-1.5">
              <img
                alt="Company Logo"
                src="https://res.cloudinary.com/dgvslio7u/image/upload/v1720845639/tofmmxz1oj8lvexsqaet.png"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-700">
                    <Link to="/user" className="block w-full h-full">
                      Home
                    </Link>
                  </Disclosure.Button>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-700">
                    <Link to="/user/complex" className="block w-full h-full">
                      All Complexes
                    </Link>
                  </Disclosure.Button>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-700">
                    <Link
                      to="/user/my-bookings"
                      className="block w-full h-full"
                    >
                      My Bookings
                    </Link>
                  </Disclosure.Button>
                </Disclosure>
              </div>
              <div className="py-6">
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="block rounded-lg px-3 py-2.5 my-4 text-base font-semibold leading-7 text-white hover:bg-blue-700">
                    <Link to="/user/profile" className="block w-full h-full">
                      Profile
                    </Link>
                  </Disclosure.Button>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-700">
                    <Link
                      onClick={handleLogout}
                      className="block w-full h-full"
                    >
                      Log out
                    </Link>
                  </Disclosure.Button>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default UserNavbar;
