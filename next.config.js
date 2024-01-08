/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hvqzvinryetccjfvzyne.supabase.co',
            }
        ]
    }
}

module.exports = nextConfig
