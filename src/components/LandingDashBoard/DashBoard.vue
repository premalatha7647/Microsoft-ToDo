<template>
    <a-layout style="height: 100%">
        <a-layout-header class="header">
            <DashBoardHeader></DashBoardHeader>
        </a-layout-header>
        <a-layout>
            <LayoutSlider></LayoutSlider>
            <a-layout style="padding: 0 24px 24px">
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <AddTask></AddTask>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import DashBoardHeader from '@/components/LandingDashBoard/DashBoardHeader.vue'
import LayoutSlider from '@/components/LandingDashBoard/LayoutSlider.vue'
import AddTask from '@/components/LandingDashBoard/AddTask/AddTaskContainer.vue'

</script>
<style scoped>
.header {
    background-color: #2564cf;
    padding: 0;
}

/* #components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
} */

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
</style>