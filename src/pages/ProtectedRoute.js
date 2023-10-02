import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify'

const protectedRoute = (Comp, route = '/profile') => (props) => {
  const navigate = useNavigate();
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser()
    } catch (err) {
      navigate("/profile")
    }
  }
  useEffect(() => {
    checkAuthState()
  })
  return <Comp {...props} />
}

export default protectedRoute
