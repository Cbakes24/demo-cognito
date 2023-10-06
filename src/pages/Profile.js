import React, { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import Container from '../layout/Container'
import Form from '../components/Form'

function Profile() {


  useEffect(() => {
    checkUser()
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signOut') {
        setUser(null)
      }
    })
  }, [])


  const [user, setUser] = useState(null) 
  
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser()
      const userInfo = { username: data.username, ...data.attributes }
      setUser(userInfo)
    } catch (err) { console.log('error: ', err) }
  }
  function signOut() {
    Auth.signOut()
      .catch(err => console.log('error signing out: ', err))
  }
  if (user) {
    return !user ? <p>Loading...</p> : (
      <Container >
        <h1 className="text-red-100">Profilee</h1>
        <h2 className="text-red-100">Username: {user.username}</h2>
        <h3 className="text-red-100">Email: {user.email}</h3>
        <button className="text-red-100" onClick={signOut}>Sign Out</button>
        <div class="prose">
  <h1>This is a heading</h1>
  <p>This is a paragraph of text.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
      </Container>
      
    );
  }
  return <Form setUser={setUser} />
}

export default Profile
