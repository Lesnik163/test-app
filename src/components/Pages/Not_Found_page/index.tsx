import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      This page doesnt exist <Link to='/'>go titular</Link>
    </div>
  )
}

export default NotFoundPage
