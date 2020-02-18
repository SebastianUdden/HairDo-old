module.exports = {
  siteMetadata: {
    title: `HairDo`,
    description: `The guide to your hairstyle.`,
    author: `@SebastianUdden`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HairDo - The guide to your hairstyle`,
        short_name: `HairDo`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#16242C`,
        display: `standalone`,
        icon: `src/images/rocket.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
