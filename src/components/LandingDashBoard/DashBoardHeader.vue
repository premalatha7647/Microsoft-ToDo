<template>
    <a-flex gap="6" align="center" justify="flex-start">
        <a-button type="text" class="custom-button">
            <template #icon>
                <BorderOuterOutlined :style="{ fontSize: '22px', color: '#fff' }" />
            </template>
        </a-button>
        <a-flex gap="6" align="center" justify="flex-start">
            <a href="/" class="todo">
                <span>To Do</span>
            </a>
            <a-input-search v-model:value="value" placeholder="input search text" style="width: 400px"
                @search="onSearch">
            </a-input-search>
        </a-flex>
    </a-flex>
</template>
<script lang="ts" setup>
import { BorderOuterOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const value = ref<string>('');
const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};
</script>

<style scoped>
.custom-button {
    width: 50px;
    height: 50px;
}

.todo {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    background: transparent;
}

.todo:hover {
    text-decoration: underline;
}
</style>