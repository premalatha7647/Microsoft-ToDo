<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer v-model:open="open" :get-container="false" class="custom-class" root-class-name="root-class-name"
    :root-style="{ color: 'blue' }" style="color: red" title="Basic Drawer" placement="right"
    @after-open-change="afterOpenChange">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref<boolean>(false);

const afterOpenChange = (bool: boolean) => {
  console.log('open', bool);
};

const showDrawer = () => {
  open.value = true;
};
</script>