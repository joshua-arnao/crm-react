import React from 'react'
import { useNavigate } from 'react-router-dom'

const Client = ({ client }) => {
  const navigate = useNavigate()
  const { id, name, phone, email, company } = client

  return (
    <tr className='border-b'>
      <td className=' p-4 space-y-1'>
        <p className='text-lg text-gray-800'>{name}</p>
        <p className='text-sm text-gray-600'>{company}</p>
      </td>

      <td className='p-4 space-y-1'>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-medium'>Email: </span>
          {email}
        </p>

        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-medium'>Tel: </span>
          {phone}
        </p>
      </td>

      <td className='p-4 flex gap-4 justify-center'>
        <button
          className='text-blue-500 hover:text-blue-900  uppercase font-semibold text-xs'
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <button className='text-red-500 hover:text-red-900  uppercase font-semibold text-xs'>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Client
