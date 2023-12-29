// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏幕宽度 iPhone X
      viewportWidth: 375
    }
  }
}
