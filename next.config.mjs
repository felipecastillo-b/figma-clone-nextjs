const nextConfig = {
    webpack: (config, { isServer }) => {
      // Configuración específica para el lado del servidor
        if (isServer) {
            // Configurar el file-loader para manejar archivos binarios
            config.module.rules.push({
            test: /\.node$/,
            use: "file-loader",
            });
        }
    
        // Excluir otros módulos
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil",
        });
    
        return config;
        },
        images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "liveblocks.io",
            port: "",
            },
        ],
        },
        typescript: {
        ignoreBuildErrors: true,
        },
    };
    
    export default nextConfig;