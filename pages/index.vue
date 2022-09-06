<template>
    <div>
        <el-button
            type="success"
            round>Click me
        </el-button>
        <el-select
            id="select"
            v-model="value"
            class="ml-4"
            placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <span>{{ value }}</span>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { ref } from 'vue';
    import { ElButton, ElSelect, ElOption } from 'element-plus';

    const value = ref<{ value: string, label: string } | null>(null);

    const options = ref([
        {
            value: 'Option1v',
            label: 'Option1l'
        },
        {
            value: 'Option2v',
            label: 'Option2l'
        },
        {
            value: 'Option3v',
            label: 'Option3l'
        },
        {
            value: 'Option4v',
            label: 'Option4l'
        },
        {
            value: 'Option5v',
            label: 'Option5l'
        }
    ]);
</script>

<style scoped>
    div {
        font-size: 3rem;
    }
</style>
