import React from 'react'
import { useLocation } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Explore from './Explore/Explore'

const Main = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      {path === '/dashboard' && <Dashboard />}
      {path === '/explore' && <Explore />}
    </>
  )
}

export default Main