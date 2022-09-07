<template>
    <div class="demo-comp">
        <span>Counter:</span><span>{{ value }}</span>
        <a-button @click="onClick">Increase</a-button>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'DemoComp',

        setup() {
            const value = ref(0);
            const onClick = () => value.value++;

            return {
                value,
                onClick
            };
        }
    })
</script>

<style lang="scss">
    .demo-comp {
        font-size: 1.5rem;

        & > span:nth-of-type(1) {
            margin-right: 1rem;
        }

        & > span:nth-of-type(2) {
            font-weight: bold;
            color: red;
            margin-right: 1rem;
        }
    }
</style>
