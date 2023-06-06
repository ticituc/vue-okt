<script setup lang="ts">
import type { Task } from '@/contract/Task';
import { computed, ref, watch } from 'vue';

//TODO: add some design import 

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const task = ref<Task>({
    description: props.modelValue?.description ?? "",
    storyPoint: props.modelValue?.storyPoint ?? 0
});

watch(props, (propValue) => {
    console.log("Change", propValue.modelValue.description ?? "");
    if (description.value != propValue.modelValue.description) {
        description.value = propValue.modelValue.description;
    }
    if (storyPoint.value != propValue.modelValue.storyPoint) {
        storyPoint.value = propValue.modelValue.storyPoint;
    }
});



const valid = computed(() => {
    return description.value.length > 0 && storyPoint.value > 0;
})

const description = computed({
    get(): string {
        return task.value?.description ?? ""
    },
    set(value: string) {
        task.value.description = value;
        if (valid.value) {

            emit('update:modelValue', {
                description: task.value.description,
                storyPoint: storyPoint.value
            })
        }
    }
})

const storyPoint = computed({
    get(): number {
        return task.value?.storyPoint ?? 0
    },
    set(value: number) {
        task.value.storyPoint = value;

        if (valid.value) {

            emit('update:modelValue', {
                description: description.value,
                storyPoint: task.value.storyPoint
            })
        }

    }
})


</script>

<template>
    <div>

        Add new Task:

        Is Value
        <pre>{{ valid }}</pre>

        <input type="text" v-model="description" />
        
        <input type="number" v-model="storyPoint" />

        <span v-if="!valid">Nem valid értékek</span>

        <!--<button @click="submit" :disabled="!valid">Submit</button>-->

    </div>
</template>