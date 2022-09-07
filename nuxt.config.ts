import { defineNuxtConfig } from 'nuxt';
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

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

    // components: true,

    alias: {
        'dayjs': 'dayjs/esm/'
    },
    build: {
        transpile: [
            "lodash-es"
            // "@babel/runtime", // building time: Could not resolve import "@babel/runtime/helpers/esm/objectSpread2.js"
        ]
    },
    nitro: {
        externals: {
            // https://github.com/nuxt/framework/issues/6495#issuecomment-1214326373
            // inline: ['@babel/runtime'],
        }
    },
    vite: {
        ssr: {
            noExternal: ['ant-design-vue', 'dayjs']
        },
        plugins: [
            Components({
                resolvers: [AntDesignVueResolver({
                    importStyle: 'less'
                })],
            })
        ],
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        'body-background': '#f7f7f7',
                        'primary-color': '#004EA8',
                        'link-color': '#004EA8',
                        'border-radius-base': '0.125rem'
                    },
                    javascriptEnabled: true
                }
            }
        }
    }
});

