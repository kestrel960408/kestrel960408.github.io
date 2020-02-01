module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    author: 'Jin_young Kim',
    title: 'Jin_young Kim',
    siteUrl: 'https://kestrel960408.github.io',
    description: 'Repo about web programming',
    icon: `content/assets/felog.png`, // Add your favicon
    keywords: [`blog`],
    comment: {
      utterances: '', // Your repository for archive comment
    },
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    'gatsby-plugin-favicon',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },{
      resolve: 'gatsby-plugin-build-date',
      options: {
        formatting: {
          format: 'YYYY',
        },
      },
    }, {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
          },
        },{
          resolve: 'gatsby-remark-images',
          options : {
            maxWidth: 950,
          }
        }],
      },
    }, 
    {
      resolve: 'gatsby-plugin-sitemap',
    }, {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://garage-repo.com',
      },
    }],
};
