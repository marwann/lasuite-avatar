import localFont from 'next/font/local'

export const marianne = localFont({
  src: [
    { path: '../public/assets/fonts/Marianne-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/assets/fonts/Marianne-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/assets/fonts/Marianne-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-marianne',
})
