require(`dotenv`).config({
  path: `.env`
});

let ghostConfig;

try {
  ghostConfig = require(`./.ghost`);
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY
    }
  };
} finally {
  const { apiUrl, contentApiKey } =
    process.env.NODE_ENV === `development`
      ? ghostConfig.development
      : ghostConfig.production;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(
      `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`
    ); // eslint-disable-line
  }
}

module.exports = {
    siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Jiahao Chen`,
    // Default title of the page
    siteTitleAlt: `Jiahao Chen`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Jiahao Chen`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://jiahao-chen.web.app`,
    // Used for SEO`
    siteDescription: `Jiahao Chen Software Engineering McGill University`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Github`,
        url: `https://github.com/jhcccc`
      },
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/jiahao-chen-jhcccc/`
      },
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog` // I want the default homepage to be /blog
      },
      {
        title: `Projects`,
        slug: `/projects`
      },
      {
        title: `About`,
        slug: `/about`
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          `gatsby-remark-smartypants`
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        basePath: `/`,
        blogPath: `/blog`,
        mdx: false // disabling mdx from the theme and redefine it here for new plugins
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID
    //   }
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jiahao Chen`,
        short_name: `Jiahao`,
        description: `My projects and blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-ghost`,
      options:
        process.env.NODE_ENV === `development`
          ? ghostConfig.development
          : ghostConfig.production
    }
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
