import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kusilk",
  description: "A simple web site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/project-index' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: 'Projetcs', link: '/project-index' },
          { text: 'Docs', link: '/assets/docs' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
