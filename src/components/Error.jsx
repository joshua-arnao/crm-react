import React from 'react'

const Error = ({ children }) => {
  return (
    <div className='text-center my-4 bg-red-600 text-white font-medium p-3 uppercase rounded-md'>
      {children}
    </div>
  )
}

export default Error
