/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'My Site',
  // tagline: 'The tagline of my site',
  url: 'https://FangyimingLode.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'FangyimingLode', // Usually your GitHub org/user name.
  projectName: 'FangyimingLode.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Facebook Project',
      logo: {
        alt: 'My Facebook Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/React/redux_React-redux',
          activeBasePath: 'docs',
          label: '文章',
          position: 'left',
        },
        {to: 'blog', label: '算法', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/FangyimingLode/FangyimingLode.github.io',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    prism: {
      additionalLanguages: ['powershell']
    },
    algolia: {
      apiKey: 'f60ff84a4b790371b51d9f69b5940f12',
      indexName: 'dev_blog',
      contextualSearch: true,
      chunkSize: 5000
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
