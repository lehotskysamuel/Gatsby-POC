module.exports = {
  siteMetadata: {
    title: `Dennik Zivota`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [`.mdx`, `.md`],
      defaultLayouts: {
        default: require.resolve("./src/components/layout-mdx.js"),
      }
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
