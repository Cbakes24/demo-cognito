import React from 'react'

function ConfirmSignUp(props) {
  return (
    <div className='bg-red-300 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='confirmationCode'
        placeholder='Confirmation Code'
        onChange={e => {e.persist();props.updateFormState(e)}}
      />
      <button onClick={props.confirmSignUp}>Confirm Sign Up</button>
    </div>
  )
}

export default ConfirmSignUp
