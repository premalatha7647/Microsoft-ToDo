<template>
    <a-flex align="flex-start" justify-content="flex-start" gap="8" vertical>
        <a-flex class="taskContainer" align="center" justify-content="flex-start" gap="2">
            <PlusOutlined :style="{ fontSize: '16px', color: '#08c' }" />
            <a-input v-model:value="newTask" :bordered="false" placeholder="Add a task" @keyup.enter="submit" />
        </a-flex>
        <ListView :taskList="addList"></ListView>
    </a-flex>
</template>
<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import ListView from '@/components/LandingDashBoard/AddTask/ListView.vue';
import service from '@/service/service';
import { message } from 'ant-design-vue';
const newTask = ref<string>('');
const addList = ref<string[]>([]);

const submit = async () => {
    addTask();
    addList.value?.push(newTask.value);
    newTask.value = ''
};

async function addTask() {
    await service.addTask(newTask.value).then((response) => {
        console.log(response)
    }).catch(
        message.error({
            content: () => 'This is a prompt message with custom className and style',
            class: 'custom-class',
            style: {
                position: 'fixed',
                marginBottom: '20vh',
            },

        }, 3000)
    )
}
</script>
<style scoped>
.taskContainer,
.listView {
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