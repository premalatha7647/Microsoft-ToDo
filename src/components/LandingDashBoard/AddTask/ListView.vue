<template>
    <a-flex class="addedList" align="center" justify-content="flex-start" gap="14"
        v-for="(task, index) of props.taskList" :key="'task' + index">
        <PlusOutlined :style="{ fontSize: '16px', color: '#08c' }" />
        <a-flex class="taskList-div" align="flex-start" justify-content="flex-start" vertical gap="2">
            <span>{{ task }}</span>
            <span>{{ task }}</span>
        </a-flex>
    </a-flex>
</template>
<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import type { PropType } from 'vue';

const props = defineProps({
    taskList: {
        required: true,
        type: Array as PropType<String[]>,
    }
})
</script>
<style scoped>
.addedList {
    box-shadow: 0px 0.3px 0.9px var(--bg-shadow), 0px 1.6px 3.6px var(--bg-shadow);
    border: 1px solid var(--bg-shadow);
    border-radius: 4px;
    min-height: 52px;
    width: 100%;
    background-color: var(--bg-primary);
    padding: 0px 16px;
    border-color: var(--bg-secondary);
}
</style>