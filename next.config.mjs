
const nextConfig = {
    images: {
        deviceSizes: [320, 480, 640, 768, 1024, 1280, 1440, 1600, 1920],
        imageSizes: [64, 128, 256, 384, 512, 768, 1024],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'image.lexica.art',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'tecdn.b-cdn.net',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'tecdn.b-cdn.net',
                port: '',
            },
        ],
    },


};

export default nextConfig;
