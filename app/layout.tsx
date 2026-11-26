import type { Metadata } from 'next'
import { Nunito, Fredoka } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const fredoka = Fredoka({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-fredoka' })

export const metadata: Metadata = {
    metadataBase: new URL('https://book-games.widifirmaan.web.id'),
    title: {
        default: 'Book Games - Interactive Counseling Gamification Platform',
        template: '%s | Book Games',
    },
    description: '30-level interactive self-reflection and school counseling web platform with student progress tracking and teacher management.',
    openGraph: {
        type: 'website',
        url: 'https://book-games.widifirmaan.web.id/',
        siteName: 'Book Games',
        title: 'Book Games - Counseling Gamification Platform',
        description: '30 interactive reflection levels across five psychological well-being dimensions for high school counseling.',
        images: [{ url: '/mirror_reflection.png', alt: 'Book Games - Counseling Gamification Platform' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book Games - Counseling Gamification Platform',
        description: '30 interactive reflection levels across five psychological well-being dimensions for high school counseling.',
        images: ['/mirror_reflection.png'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id">
            <body className={`${nunito.variable} ${fredoka.variable} min-h-screen bg-[#b3e5fc] text-gray-900 font-sans`}>
                {children}
            </body>
        </html>
    )
}
