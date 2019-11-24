/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog/cour`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
