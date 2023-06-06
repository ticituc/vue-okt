<script setup lang="ts">
import type { Task as TaskInterface } from '@/contract/Task';
import Task from "./Task.vue";



const props = defineProps({
    tasks: Array<TaskInterface>,
    active: Boolean,
})

</script>

<template>
    <section>
        <h1>
            <slot name="header"> Task List Header</slot>
        </h1>
        <p class="body">
            <slot> Slot Default Value</slot>
        </p>
        <Task v-for="task of props.tasks" :task="task"></Task>

        <p class="footer">
            <slot name="footer"> Task List Footer</slot>
        </p>
    </section>
</template>

<style scoped>
h1 {
    font-size: 24px;
}

.body {
    font-size: 16px;
}

.footer {
    font-size: 12px;
}
</style>