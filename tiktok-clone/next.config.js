/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, {isServer} ) => {
        // Add a rule to handle the canvas.node binary module (dunno what this does at all)
        config.module.rules.push({test: /\.node$/, use: 'raw-loader'})
        
        // Exclude canvas from being processed by next.js in the broswer (AGAIN dunno what this means)
        if(!isServer) config.externals.push('canvas');
        return config;
    }
}

module.exports = nextConfig
