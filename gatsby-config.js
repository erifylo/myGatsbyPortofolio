/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Erifyli Evangelou",
    description: "This is Erifyli Evangelou Portfolio Site",
    author: "@webdev",
    twitterUsername: "@erifyli",
    image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, 
        contentTypes: [`jobs` , `projects`, `blogs`],
        singleTypes: [`about`], 
      },
    },
     {
       resolve: `gatsby-plugin-webfonts`,
      options: {
       fonts: {
         google: [
            {
             family: "Roboto",
               variants: ["400", "700"],
            },
             { family: "Open Sans" },
           ],
         },
       },
     },
  ],
}
