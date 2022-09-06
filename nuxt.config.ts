import { defineNuxtConfig } from 'nuxt'

const lifecycle = process.env.npm_lifecycle_event;

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossOrigin: null
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
                }
            ],
            noscript: [
                { children: 'Javascript is required' }
            ]
        }
    },

    css: [
        'element-plus/theme-chalk/src/index.scss',
        '~/styles/index.scss'
    ],

    build: {
        transpile: lifecycle === 'build' || lifecycle === 'generate'
            ? ['element-plus']
            : []
    },

    typescript: {
        strict: true,
        shim: false
    },

    components: true,

    vite: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver({
                    importStyle: 'sass',
                    ssr: true
                })]
            })
        ]
    }
})
