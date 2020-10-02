import Vue from 'vue'

Vue.filter('generateSrcset', function (image) {
  const { thumbnail, small, medium, large } = image.formats
  const srcsets = [thumbnail, small, medium, large, image]
    .filter((f) => f)
    .map((format) => `${format.url} ${format.width}w`)
  return srcsets.join(',')
})

Vue.filter('generateSizes', function (image) {
  const breakpoints = {
    thumbnail: '156px',
    small: '599px',
    medium: '959px',
    large: '1263px',
  }
  const sizes = []
  for (const f in breakpoints) {
    const breakpoint = breakpoints[f]
    const format = image.formats[f]
    if (!format) continue
    sizes.push(`(max-width: ${breakpoint}) ${format.width}px`)
  }
  sizes.push(`${image.width}px`)
  return sizes.join(',')
})
