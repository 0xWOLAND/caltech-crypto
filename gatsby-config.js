const author = {
  name: "Bhargav Annem",
  jobTitle: "Software Engineer",
  description: "Caltech Blockchain",
  disambiguatingDescription: "Caltech Blockchain",
  knowsAbout: ["Software Engineering", "Computer Science"],
  url: "http://github.com/0xWOLAND",
  email: "mailto:bannem@caltech.edu",
};

const authorSocial = {
  github: "https://github.com/0xWOLAND",
  linkedin: "https://www.linkedin.com/in/bhargav-a-672777180/",
};

const siteSocial = {
  repository: "https://github.com/0xWOLAND/caltech-crypto",
  gatsby: "https://www.gatsbyjs.org/",
  react: "https://reactjs.org/",
};

const siteMetadata = {
  siteUrl: "https://0xwoland.github.com/caltech-crypto",
  siteName: "Caltech Blockchain",
  siteSocial,
  googleAnalyticsTrackingId: "UA-48045203-1",
  author,
  authorSocial,
};

module.exports = {
  siteMetadata,
  pathPrefix: "/caltech-crypto",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteName,
        start_url: "/",
        background_color: "#222222",
        theme_color: "#222222",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-optimize-svgs",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.inline.svg/,
        },
      },
    },
    "babel-plugin-styled-components",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: siteMetadata.googleAnalyticsTrackingId,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans:400,700:latin&display=swap", "sans-serif"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          {
            domain: "https://fonts.gstatic.com",
            crossOrigin: true,
          },
          {
            domain: "https://fonts.googleapis.com",
            crossOrigin: true,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-html-minifier",
      options: {
        minifyCSS: false,
        minifyJS: true,
        sortAttributes: true,
        useShortDoctype: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
      },
    },
  ],
};
