import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden pt-8 bg-gradient-to-r from-yellow-800 via-gray-900 to-gray-800 border-t-2 border-t-black">
      <div className="relative z-10 mb-5">
        <div className=" flex flex-wrap justify-center gap-3 md:justify-around">
          <div className="p-3">
            <div className="h-full mb-2">
              <h3 className="tracking-px text-md mb-6 font-semibold uppercase text-[#E0E0E0]">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-3">
            <div className="h-full mb-2">
              <h3 className="tracking-px mb-6 text-md font-semibold uppercase text-[#E0E0E0]">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="p-3">
            <div className="h-full mb-2">
              <h3 className="tracking-px mb-6 text-md font-semibold uppercase text-[#E0E0E0]">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-[#afdde5] hover:text-[#4FD1C5] transition duration-300"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-2 md:gap-5 px-5 py-2 bg-black/30">
        <div className="flex justify-center items-center">
          <Logo width="45px" />
        </div>
        <div>
          <p className="text-sm text-center text-[#E0E0E0]">
            &copy; Copyright 2024. All Rights Reserved by Md Noorain.
          </p>
        </div>
      </div>
    </section>


  )
}

export default Footer