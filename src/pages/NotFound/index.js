import * as React from 'react'
import { Link } from '@reach/router'

import Layout from '../../components/Layout'

function NotFound() {
  return (
    <Layout>
      <h1 className="text-center">404.</h1>
      <p>Sorry the requested page was not found</p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default NotFound
