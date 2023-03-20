import React from 'react'
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate
} from 'react-router-dom'
import { getClient, updateClient } from '../api/clients'
import Error from '../components/Error'
import { Form as ComponentForm } from '../components/Form'

export async function loader({ params }) {
  const client = await getClient(params.clientId)
  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Cliente no encontrado o Cliente no existe'
    })
  }

  return client
}

export async function action({ request, params }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
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

  //* Retornar datos si hay errores *//
  if (Object.keys(errors).length) {
    return errors
  }

  //* Actualizar cliente *//
  await updateClient(params.clientId, data)
  return redirect('/')
}

const EditClient = () => {
  const navigate = useNavigate()
  const client = useLoaderData()
  const errors = useActionData()

  return (
    <>
      <h1 className='font-semibold text-3xl text-blue-900'> Editar Cliente</h1>
      <p className='mt-3'>
        A continuación podrás modificar los datos de un cliente
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
          <ComponentForm client={client} />

          <input
            type='submit'
            className='mt-5 w-full bg-green-800 p-3 uppercase font-medium text-white text-base rounded-md hover:cursor-pointer hover:bg-green-900'
            value='Guardar Cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default EditClient
