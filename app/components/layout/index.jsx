import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Layout = ({ children }) => {
  console.log('me renderizo')
  return (
    <div>
      <div>
        <Link to='/'>home</Link>
        <Link to='/settings'>settings</Link>
        <Link to='/users'>users</Link>
        <Link to='/login'>login</Link>
      </div>
      {children}
    </div>
  )
}

export default withRouter(Layout)
