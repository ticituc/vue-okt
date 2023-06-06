<script setup lang="ts">
import type { Task } from '@/contract/Task';
import ItemInput from './ItemInput.vue';


const props = defineProps<{ task: Task }>()

</script>

<template>
    <div class="col-12">
        <div class="row">
            <div class="col-12">
                Task Description: {{ props.task.description }}
                Story point: {{ props.task.storyPoint }}
            </div>

            <!--<ItemInput class="" :modelValue="props.task">
                Edit Task
            </ItemInput>-->
        </div>


    </div>
</template>




