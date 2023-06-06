<script setup lang="ts">
import type { Task } from '@/contract/Task';
import { computed, ref } from 'vue';


const emit = defineEmits<{
    (e: 'item-added', task: Task): void
}>()


const description = ref("");
const storyPoint = ref(0);

const valid = computed(() => {
    return description.value.length > 0 && storyPoint.value > 0;
})


function submit() {
    const task: Task = {
        description: description.value,
        storyPoint: storyPoint.value
    };

    if (valid) {
        emit('item-added', task)

        description.value = "";
        storyPoint.value = 0
    }
}

</script>

<template>
    <div>
        Add new Task:
        <input type="text" v-model="description" />

        <input type="number" v-model="storyPoint" />
        <button @click="submit" :disabled="!valid">Submit</button>
    </div>
</template>