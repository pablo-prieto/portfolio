module.exports = {
  siteMetadata: {
    title: 'Pablo Prieto',
    description:
      'Pablo Prieto is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.',
    siteUrl: 'https://pabloprieto.io', // No trailing slash allowed!
    image: './static/letterP.png', // Path to your image you placed in the 'static' folder
    // twitterUsername: '@bchiang7',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
}