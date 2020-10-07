import Vue from 'vue'

Vue.filter('generateSrcset', function (image) {
  const { thumbnail, small, medium, large } = image.formats
  const srcsets = [thumbnail, small, medium, large, image]
    .filter((f) => f)
    .map((format) => `${format.url} ${format.width}w`)
  return srcsets.join(',')
})

