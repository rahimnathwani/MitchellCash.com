const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'MitchellCash.com',
    titleTemplate: "%s - MitchellCash.com",
    description: "I'm Mitchell Cash: sort of geeky, sort of not.",
    author: 'Mitchell Cash',
    siteUrl: 'https://mitchellcash.com',
    image: "/img/avatar.jpeg",
    twitterUsername: "@Mitch_Cash"
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'img')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, 'src', 'pages', 'posts')
      }
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-reading-time',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-netlify'
  ]
}
