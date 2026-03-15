type ImageSrc = {
  thumbnail?: string
  small?: string
  medium?: string
  large?: string
  url?: string
  width?: number
}

export const generateSrcset = (image: ImageSrc) => {
  if (!image) return ''
  const { thumbnail, small, medium, large, url: original, width } = image
  const srcsets = [
    thumbnail ? `${thumbnail} 250w` : null,
    small ? `${small} 500w` : null,
    medium ? `${medium} 750w` : null,
    large ? `${large} 1000w` : null,
    original && width ? `${original} ${width}w` : null,
  ].filter(Boolean)

  return srcsets.join(',')
}
