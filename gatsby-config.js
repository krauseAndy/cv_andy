module.exports = {
  siteMetadata: {
    title: "Krause Andy CV",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP",
    pathPrefix: "/cv_andy"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        path: __dirname + "/public/",
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/public/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline"
  ]
};
