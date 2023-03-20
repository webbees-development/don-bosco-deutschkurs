// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: {
    favicon: {
      src: "./src/assets/images/logo/favicon.png",
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: "./src/assets/images/logo.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/data/flags/*.md",
        typeName: "Flag",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/data/posts/*.md",
        typeName: "Post",
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/data/images/*.md',
        typeName: 'CustomImage',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/data/gallery_images/*.md',
        typeName: 'GalleryImage',
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: 'gridsome-plugin-robots',
    }
  ],
  siteName: "Don Bosco für Flüchtlinge",
  siteUrl: "https://fluechtlinge.donbosco.at/",
  siteDescription: "Finden Sie Informationen über das Engagement der Salesianer Don Boscos für Flüchtlinge.",
  templates: {
    Post: '/beitrag/:id',
  },
  titleTemplate: '%s | Don Bosco für Flüchtlinge',
};
