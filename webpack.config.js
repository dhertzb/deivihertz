const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        use: ["vue-style-loader", "css-loader"],
        loader: "sass-loader",
        options: {
          indentedSyntax: true,
          // sass-loader version >= 8
          sassOptions: {
            indentedSyntax: true
          }
        }
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  options: {
    transformAssetUrls: {
      video: ["src", "poster"],
      source: "src",
      img: "src",
      image: "xlink:href",
      "b-avatar": "src",
      "b-img": "src",
      "b-img-lazy": ["src", "blank-src"],
      "b-card": "img-src",
      "b-card-img": "src",
      "b-card-img-lazy": ["src", "blank-src"],
      "b-carousel-slide": "img-src",
      "b-embed": "src"
    }
  }
};
