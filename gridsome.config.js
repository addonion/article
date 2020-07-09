// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

    siteName: 'Carrot quest',
    titleTemplate: "%s",
    
    plugins: [
        {
            use: 'gridsome-plugin-gtm',
            options: {
                id: 'GTM-TKFL867',
                enabled: true,
                debug: false
            }
        },
        {
            use: 'gridsome-plugin-pwa',
            options: {
                title: 'Carrot quest',
                startUrl: 'https://www.carrotquest.io/',
                display: 'standalone',
                statusBarStyle: 'default',
                manifestPath: 'manifest.json',
                disableServiceWorker: true,
                serviceWorkerPath: 'service-worker.js',
                cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
                shortName: 'Carrot quest',
                themeColor: '#ff892a',
                backgroundColor: '#ffffff',
                icon: './static/favicon.png', // must be provided
                msTileImage: '',
                msTileColor: '#ff892a'
            }
        }
    ],
}