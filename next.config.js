/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sbmfrmcyxnesjlaoydnz.supabase.co',
            }
        ]
    }
}

module.exports = nextConfig
