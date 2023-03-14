import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getClients } from '../api/clientes'
import Client from '../components/Client'

export function loader() {
  console.log(import.meta.env)
  const clients = getClients()

  return clients
}

function Index() {
  const clients = useLoaderData()

  // Error Boundaries -> Errores que obtiene los errores en cualquiere lugar del componente

  return (
    <>
      <h1 className='font-semibold text-3xl text-blue-900'> Clientes</h1>
      <p className='mt-3'>Administra tus cliente</p>

      {clients.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto '>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Clientes</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <Client client={client} id={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'></p>
      )}
    </>
  )
}

export default Index
