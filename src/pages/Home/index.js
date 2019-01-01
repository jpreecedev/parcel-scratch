import * as React from 'react'
import { Link } from '@reach/router'

import Layout from '../../components/Layout'

class Home extends React.Component {
  state = {
    message: 'Hello, World!'
  }

  showMessage = () => {
    const { message } = this.state
    // eslint-disable-next-line no-alert
    alert(message)
  }

  render() {
    return (
      <Layout>
        <h1>A bare bones Parcel.js, React, Jest, Babel 7 starter project</h1>
        <button type="button" className="button" onClick={this.showMessage}>
          Show me a message
        </button>
        <Link to="/about">About</Link>
        <br />
        <Link to="/nope">404 Page</Link>
      </Layout>
    )
  }
}

export default Home
