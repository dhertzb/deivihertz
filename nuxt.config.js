export default {
  loading: {
    color: 'blue',
    height: '5px'
  },
  target: 'static',
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
  modules: [ 'bootstrap-vue/nuxt','@nuxt/content',
  ['nuxt-font-loader-strategy', { 
    fonts: [
      {
        fileExtensions: ['ttf'],
        fontFamily: 'Press Start 2P',
        fontFaces: [
          {
            preload: true,
            src: '@/assets/fonts/PressStart2P-Regular',
            fontWeight: 400,
            fontStyle: 'normal'
          },
        ]
      },
      {
        fileExtensions: ['ttf'],
        fontFamily: 'UbuntuMono', 
        fontFaces: [
          {
            preload: true,
            src: '@/assets/fonts/UbuntuMono-Regular',
            fontWeight: 400,
            fontStyle: 'normal'
          },
          {
            preload: true,  
            src: '@/assets/fonts/UbuntuMono-Bold',
            fontWeight: 700,
            fontStyle: 'bold'
          }
        ]
      },
    ]
  }]],
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
