/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * Le resolver récupère les données depuis les fichiers /blog/cour/*.md et 
 * appele le component cour-post.js afin de créer des components cour.js avec le données.
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
