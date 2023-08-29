export const pagesPath = {
  "posts": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "profile": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  god_png: '/god.png',
  ogp: {
    ogp_cls_png: '/ogp/ogp-cls.png',
    ogp_javascript_png: '/ogp/ogp-javascript.png'
  },
  ogp_png: '/ogp.png',
  profile_image_png: '/profile-image.png'
} as const

export type StaticPath = typeof staticPath
