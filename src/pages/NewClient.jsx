import React from 'react'
import { useNavigate, Form } from 'react-router-dom'
import { Form as ComponentForm } from '../components/Form'

export function action() {
  console.log('Submit')

  return { ok: true }
}

const NewClient = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-semibold text-3xl text-blue-900'> Nuevo Cliente</h1>
      <p className='mt-3'>
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className='flex justify-start mt-6'>
        <button
          className='border-2 rounded-lg border-blue-900 text-blue-900 px-4 py-2 uppercase hover:bg-blue-900 hover:text-gray-100 duration-300'
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-8 py-10 mt-8'>
        <Form method='post'>
          <ComponentForm />

          <input
            type='submit'
            className='mt-5 w-full bg-green-800 p-3 uppercase font-medium text-white text-base rounded-md hover:cursor-pointer hover:bg-green-900'
            value='Registrar Cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default NewClient
