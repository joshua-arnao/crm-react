import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-bold text-center text-white'>
          CRM - Clientes
        </h2>

        <nav className='mt-10'>
          <div
            className={`${
              location.pathname === '/'
                ? 'text-blue-900 font-semibold bg-white'
                : 'text-white'
            } text-2xl px-2 py-2 mt-2 hover:text-blue-300`}
          >
            <Link to='/'>Clientes</Link>
          </div>

          <div
            className={`${
              location.pathname === '/clientes/nuevo'
                ? 'text-blue-900 font-semibold  bg-white'
                : 'text-white'
            } text-2xl px-2 py-2 mt-2 hover:text-blue-300`}
          >
            <Link to='/clientes/nuevo'>Nuevo Cliente</Link>
          </div>
        </nav>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
