export const pagesPath = {
  "blogs": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blogs/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "category": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/category/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  god_png: '/god.png',
  profile_image_png: '/profile-image.png'
} as const

export type StaticPath = typeof staticPath
