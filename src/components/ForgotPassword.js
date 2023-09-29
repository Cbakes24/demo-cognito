import React from 'react'

function ForgotPassword(props) {
  return (
    <div className='bg-red-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
      <input
      className='shadow appearance-none border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='username'
        placeholder='Username'
        onChange={e => {e.persist();props.updateFormState(e)}}
      />
      <button className='btn btn-accent w-fit mt-2' onClick={props.forgotPassword}>Reset password</button>
    </div>
  )
}

export default ForgotPassword
