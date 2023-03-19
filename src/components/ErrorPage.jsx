import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className='space-y-8'>
      <h1 className='text-center text-4xl mt-60 font-medium text-blue-900'>
        CRM - Clientes
      </h1>
      <p className='text-center'>Hubo un error</p>
      <p className='text-center'>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage
