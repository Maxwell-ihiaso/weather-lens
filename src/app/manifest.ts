import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Weather Lens',
        short_name: 'Weather Lens',
        description: 'Get weather updates.',
        start_url: '/',
        display: 'standalone',
        theme_color: '#171B34',
        background_color: '#171B34',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
