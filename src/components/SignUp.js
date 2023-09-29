import React from 'react'

function SignUp({ updateFormState, signUp }) {
  return (
    <div className='bg-red-300 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='username'
        onChange={e => {e.persist();updateFormState(e)}}
        placeholder='username'
      />
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type='password'
        name='password'
        onChange={e => {e.persist();updateFormState(e)}}
        placeholder='password'
      />
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='email'
        onChange={e => {e.persist();updateFormState(e)}}
        placeholder='email'
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={signUp}>Sign Up</button>
    </div>
  )
}

export default SignUp
