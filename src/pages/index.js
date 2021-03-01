import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// let API_KEY = 'MC5YLUd5dmhFQUFDQUE4eXAt.77-9WzwJPEPvv70477-977-977-977-9Ku-_ve-_vVjvv71-77-9D--_vUHvv73vv73vv71_77-9e--_ve-_vRUd';

export default props => {
  const { data } = props
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.prismic1234.data.title.text}</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={data.prismic1234.data.image.url} alt={data.prismic1234.data.image.alt} />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const query = graphql`{
  prismic1234 {
    data {
      title {
        text
      }
      image{
        url
        alt
      }
    }
  }
}
`;
