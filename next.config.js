/** @type {import('next').NextConfig} */
module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        //https://levelup.gitconnected.com/how-to-use-svg-icons-in-a-next-js-project-f6f8256f9e12
        return config
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['storage.yandexcloud.net'],
    },
}
