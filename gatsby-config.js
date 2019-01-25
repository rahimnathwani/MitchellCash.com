const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'static', 'img')
      }
    },
    "gatsby-plugin-sharp",
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    "gatsby-transformer-sharp"
  ]
}
