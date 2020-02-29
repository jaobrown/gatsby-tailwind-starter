import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={`font-serif font-bold text-3xl mb-2`}>Hi people</h1>
    <Link to="/page-2/" className={`mb-4`}>
      Go to page 2
    </Link>{" "}
  </Layout>
)

export default IndexPage
