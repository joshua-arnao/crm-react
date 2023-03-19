import React from 'react'
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import { addClient } from '../api/clients'
import Error from '../components/Error'
import { Form as ComponentForm } from '../components/Form'

export async function action({ request }) {
  const formData = await request.formData()
  // console.log([...formData])

  const data = Object.fromEntries(formData)
  // console.log(data)

  const email = formData.get('email')

  //* Validación *//
  const errors = []
  if (Object.values(data).includes('')) {
    errors.push('Todos los campos son Obligatorios')
  }
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )
  if (!regex.test(email)) {
    errors.push('El Email no es valido')
  }

  if (Object.keys(errors).length) {
    //* Retornar datos si hay errores *//
    return errors
  }

  await addClient(data)

  return redirect('/')
}

const NewClient = () => {
  const errors = useActionData()
  const navigate = useNavigate()

  console.log(errors)
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

export default NewClient
