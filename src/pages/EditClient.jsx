import React from 'react'
import { Form } from 'react-router-dom'
import { getClient } from '../api/clients'
import { Form as ComponentForm } from '../components/Form'

export async function loader({ params }) {
  console.log(params)

  const client = await getClient(params.clientId)
  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Cliente no encontrado o Cliente no existe'
    })
  }
  console.log(client)

  return client
}

const EditClient = () => {
  return (
    <>
      <h1 className='font-semibold text-3xl text-blue-900'> Editar Cliente</h1>
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
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method='post' noValidate>
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

export default EditClient
