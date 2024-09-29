import React, { useState } from 'react'
import { Logo, LogoutBtn, Container } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {
      name: "Home",
      slug: '/',
      active: true,
    },
    {
      name: "Login",
      slug: '/login',
      active: !authStatus,
    },
    {
      name: "Sign Up",
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: '/add-post',
      active: authStatus,
    }
  ]

  return (
    <header className='py-2 shadow-sm bg-gradient-to-r from-yellow-800 via-gray-900 to-gray-800 text-[#afdde5] z-20 sticky top-0 shadow-white/80'>
      <Container>
        <nav className='flex justify-between items-center'>
        
          <div className='mr-4'>
            <Link to='/' className='flex items-center gap-2 md:gap-5 hover:scale-105 duration-300'>
              <Logo width='65px' username={userData && userData.name} />
              <h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>
                {userData ? userData.name : "Guest"}
              </h2>
            </Link>
          </div>


          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-8 h-8 focus:outline-none transition duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-45' : ''
                }`}
            >
              <span
                className={`block absolute h-1 w-6 bg-[#964734] transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'
                  }`}
              ></span>
              <span
                className={`block absolute h-1 w-6 bg-[#964734] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              ></span>
              <span
                className={`block absolute h-1 w-6 bg-[#964734] transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'
                  }`}
              ></span>
            </button>
          </div>

          {isMenuOpen && (
            <div
              className='fixed inset-0 bg-black opacity-50 z-10 md:hidden'
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          <ul
            className={`fixed top-0 right-0 h-full md:rounded-tr-full md:rounded-br-full bg-gradient-to-r from-gray-800/85 via-gray-900 to-gray-800 md:bg-gradient-to-r md:from-transparent md:via-[#024950] md:to-[#964734] p-6 space-y-4 w-64 transition-transform transform z-20 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } md:flex md:static md:bg-transparent md:space-y-0 md:w-auto md:p-0 md:translate-x-0 md:ml-auto`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='my-2 md:my-0'>
                  <button
                    className={`inline-block px-4 py-2 mx-1 duration-300 hover:bg-[#0fa4af] rounded-full ${isMenuOpen ? 'border w-full ' : ''}`}
                    onClick={() => {
                      navigate(item.slug);
                      setIsMenuOpen(false); // Close menu on item click
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li className='my-2 md:my-0'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>


  )
}

export default Header