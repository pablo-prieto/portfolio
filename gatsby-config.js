const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Pablo Prieto',
    description:
      'Pablo Prieto is a software engineer based in New York who specializes in front-end development but loves to learn and understand every part of the tech stack',
    siteUrl: 'https://pabloprieto.io', // No trailing slash allowed!
    image: './static/ogImage.png', // Path to your image you placed in the 'static' folder
    email: 'prietop.pablo@gmail.com'
    // twitterUsername: '@bchiang7',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PabloPrieto',
        short_name: 'PabloPrieto',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'static/LetterPNew3.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EW6WEVHWFJ"
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    }
  ],
}