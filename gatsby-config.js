const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Pablo Prieto',
    description:
      'Pablo Prieto is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.',
    siteUrl: 'https://pabloprieto.io', // No trailing slash allowed!
    image: './static/letterP.png', // Path to your image you placed in the 'static' folder
    email: 'prietop.pablo@gmail.com'
    // twitterUsername: '@bchiang7',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
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
    }
  ],
}