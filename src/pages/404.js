import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>NOT FOUND</h1>
      <p>
        Oh no! this route doesn&#39;t exist... try a new route to continue your
        journey
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
