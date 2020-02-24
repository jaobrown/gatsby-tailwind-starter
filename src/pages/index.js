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
    <br></br>
    <p>
      hello there from a nice p tag <span>in a span</span>
    </p>
    <button
      className={`py-2 px-4 bg-teal-400 text-white rounded-full hover:bg-teal-500 mt-4`}
    >
      click me
    </button>
  </Layout>
)

export default IndexPage
