<template>
    <a-list size="small" :bordered="false" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>{{ item }}</a-list-item>
        </template>
        <template #header>
            <slot name="header"></slot>
        </template>
        <template #footer>
            <div>Footer</div>
        </template>
    </a-list>
</template>
<script lang="ts" setup>
const data: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
</script>