module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
        // Do not fetch fonts from the Google Font URL as they are loaded
        // from the typeface-roboto* packages and stored locally in the static/
        // build directory.
        omitGoogleFont: true
      }
    }
  ]
}
