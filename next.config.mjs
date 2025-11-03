/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [25, 50, 75, 90, 100],

        //Para o Next aceitar imagens vindas de outros hosts
        remotePatterns : [
            {hostname : '*'}
        ]

    },
};

export default nextConfig;

