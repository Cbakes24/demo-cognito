import React from 'react'

function SignIn({ signIn, updateFormState }) {
  return (
    <div>
      <input 
      className='border-2 border-gray-300'
        name='username'
        onChange={e => {e.persist();updateFormState(e)}}
        placeholder='username'
      />
      <input
      className='border-2 border-gray-300'
        type='password'
        name='password'
        onChange={e => {e.persist();updateFormState(e)}}
        placeholder='password'
      />
      <button className="btn" onClick={signIn}>Sign In</button>
    </div>
  )
}

export default SignIn
