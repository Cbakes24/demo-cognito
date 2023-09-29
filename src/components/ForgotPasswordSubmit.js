import React from 'react'

function ForgotPasswordSubmit(props) {
  return (
    <div className='bg-red-300 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='confirmationCode'
        placeholder='Confirmation code'
        onChange={e => {e.persist();props.updateFormState(e)}}
      />
      <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='password'
        placeholder='New password'
        type='password'
        onChange={e => {e.persist();props.updateFormState(e)}}
      />
      <button onClick={props.forgotPasswordSubmit}>Save new password</button>
    </div>
  )
}

export default ForgotPasswordSubmit
