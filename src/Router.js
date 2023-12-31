import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Nav from './pages/Nav'
import Public from './pages/Public'
import Profile from './pages/Profile'
import Protected from './pages/Protected'

const Router = () => {
  const [current, setCurrent] = useState('home')
  useEffect(() => {
    setRoute()
    window.addEventListener('hashchange', setRoute)
    return () =>  window.removeEventListener('hashchange', setRoute)
  }, [])
  function setRoute() {
    const location = window.location.href.split('/')
    const pathname = location[location.length-1]
    setCurrent(pathname ? pathname : 'home')
  }
  return (
    <HashRouter>
      <Nav current={current} />
      <Routes>
        <Route exact path="/" component={Public}/>
        <Route exact path="/protected" component={Protected} />
        <Route exact path="/profile" component={Profile}/>
        <Route component={Public}/>
      </Routes>
    </HashRouter>
  )
}

export default Router
