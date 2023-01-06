import Vue from 'vue'

Vue.filter('generateSrcset', function (image) {
  const { thumbnail, small, medium, large, url: original, width } = image
  const srcsets = [
  `${thumbnail} 250w`,
  `${small} 500w`,
  `${medium} 750w`,
  `${large} 1000w`,
  `${original} ${width}w`,
  ]
  return srcsets.join(',')
})
