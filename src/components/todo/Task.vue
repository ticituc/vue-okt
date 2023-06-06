<script setup lang="ts">
import type { Task } from '@/contract/Task';

const props = defineProps<{ task: Task }>()

</script>

<template>
    <div>
        Task Description: {{ props.task.description }}
        Story point: {{ props.task.storyPoint }}
    </div>
</template>




