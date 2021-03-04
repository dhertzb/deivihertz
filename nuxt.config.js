export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },
  plugins: [],
  modules: [ 'bootstrap-vue/nuxt','@nuxt/content'],
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['@/assets/css/_global.scss'],
   },
  build: {
    extend(config, ctx) {},
  },
};
