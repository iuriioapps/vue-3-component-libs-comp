<template>
    <n-config-provider :theme-overrides="themeOverrides">
        <n-notification-provider>
            <NuxtPage />
        </n-notification-provider>
    </n-config-provider>
</template>

<script
    lang="ts"
    setup>
    import {
        NConfigProvider,
        NNotificationProvider,
        GlobalThemeOverrides
    } from 'naive-ui';

    const themeOverrides: GlobalThemeOverrides = {
        Button: {
            color: '#004EA8',
            colorPrimary: '#004EA8',
            colorHoverPrimary: 'red',

            textColor: '#FFFFFF',
            borderFocus: '#004EA8',
            borderPrimary: 'solid 2px red',
        },
        Select: {
            peers: {
                InternalSelection: {
                    arrowColor: '#004EA8',
                    textColor: '#4f4f4f'
                }
            }
        }
    }
</script>
