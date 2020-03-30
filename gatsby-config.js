module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-custom-api`,
      options: {
        url: "https://covid19.mathdro.id/api",
		},
        rootKey: `worldwide`,
        schemas: {
        	confirmed: `	
            	value: Int
                detail: String
          `,
          recovered: `
            value: Int
            detail: String
          `,
          deaths: `
            value: Int
            detail: String
          `,
          dailySummary: `String`,
          dailyTimeSeries: `
            pattern: String
            example: String
          `,
          image: `String`,
          source: `String`,
          countries: `String`,
          countryDetail: `
            pattern: String
            example: String
          `,
          lastUpdate: `String`
          
        }
        
      }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
