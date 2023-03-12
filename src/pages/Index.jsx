import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Client from '../components/Client'

export function loader() {
  const clients = [
    {
      id: 1,
      name: 'Juan',
      phone: 102013313,
      email: 'juan@jempresacom',
      company: 'Empresa'
    },
    {
      id: 2,
      name: 'Karen',
      phone: 138198313,
      email: 'karen@empresa.com',
      company: 'Empresa'
    },
    {
      id: 3,
      name: 'Josue',
      phone: 31983913,
      email: 'josue@empresa.com',
      company: 'Empresa'
    },
    {
      id: 4,
      name: 'Miguel',
      phone: 319381983,
      email: 'miguelempresan.com',
      company: 'Empresa'
    },
    {
      id: 5,
      name: 'Pedro',
      phone: 1398198938,
      email: 'pedro@empresa.com',
      company: 'Empresa'
    }
  ]

  return clients
}

function Index() {
  const clients = useLoaderData()

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
