import React from "react"
import Layout from "../components/Layout"
import Cour from "../components/cour"
import { graphql } from 'gatsby'

export default ({ data }) => {
  const  courData  = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div>
        <Cour cour = {courData}/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        theme
        methodes
        corrigerExercices
        activites
      }
    }
  }
`