import React from 'react'

function SignIn({ signIn, updateFormState }) {
  return (
    <div className='bg-red-300 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <input 
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='username'
        onChange={e => {e.persist();updateFormState(e)}}
        placeholder='username'
      />
      <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type='password'
        name='password'
        onChange={e => {e.persist();updateFormState(e)}}
        placeholder='password'
      />
      <button className="btn btn-accent" onClick={signIn}>Sign In</button>
    </div>
  )
}

export default SignIn
