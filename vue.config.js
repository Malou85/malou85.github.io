module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options['transformAssetUrls'] = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  },
  configureWebpack: {
    devtool: 'inline-source-map',
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: true
      },
      postcss: {
        sourceMap: true
      },
      sass: {
        sourceMap: true
      }
    }
  }
}
