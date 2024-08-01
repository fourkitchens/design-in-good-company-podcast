import '@/styles/tailwind.css'
import Fathom from '@/lib/Fathom';

export const metadata = {
  title: {
    template: '%s - Design in Good Company',
    default:
      'Design in Good Company - Your go-to podcast for where creativity, community, and values converge.',
  },
  description:
    'Your go-to podcast for where creativity, community, and values converge. We‘re not just about making great designs, we‘re about making designs that do great things.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/cug3dua.css" />
      </head>
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
        <Fathom />
      </body>
    </html>
  )
}
