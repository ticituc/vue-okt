
<script setup lang="ts">
import type { Task } from '@/contract/Task';
import { useTaskStore } from '@/stores/task';
import { computed, ref, watch } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', "save"])
const taskStore = useTaskStore();

const task = ref<Task>({
    description: props.modelValue?.description ?? "",
    storyPoint: props.modelValue?.storyPoint ?? 0
});

watch(props, (propValue) => {
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
    <div class="row">
        <div class="col-12">
            <slot>Add new Task:</slot>
        </div>
        <div class="col-6">
            <input type="text" v-model="description" />
        </div>
        <div class="col-6">
            <input type="number" v-model="storyPoint" />
        </div>
        <div class="col-12">
            <span v-if="!valid">Nem valid értékek</span>
        </div>

        <!--<button class="btn btn-primary" @click="$emit('save')" :disabled="!valid">Submit</button>-->
        Progress: {{ taskStore.saveInProgress }}
        <div class="col-12">
            <button class="btn btn-primary" @click="$emit('save')"
                :disabled="!valid || taskStore.saveInProgress">Submit</button>
        </div>

    </div>
</template>