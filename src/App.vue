<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, reactive, ref, watch } from 'vue';

import type { Task } from '@/contract/Task';

import AddItem from "./components/todo/AddItem.vue";
import ItemInput from "./components/todo/ItemInput.vue";

import TaskList from "./components/todo/TaskList.vue";
import { useTaskStore } from './stores/task';


const taskStore = useTaskStore();


const taskList = ref<Task[]>([]);
const task = ref<Task>();

task.value = {
  id: -1,
  description: "Test",
  storyPoint: 3

}

function itemAdded() {
  if (task.value) {
    taskList.value.push(task.value);
  }

  task.value = {
    id: -1,
    description: '',
    storyPoint: 0,
  }
}

//const taskStore = useTaskStore();


function modelChange(newVal: any) {
  console.log("Model new Value", newVal);
}

</script>

<template>
  <div class="container">

    <TaskList :tasks="taskStore.tasks" class="row">
      <template v-slot:header>
        Override Header Value
      </template>

      Override Slot Value

      <template v-slot:footer>
        Override Footer Value
      </template>
    </TaskList>

    <div class="row">
      <ItemInput v-model="task" class="col-12" @save="itemAdded">
        Add new Task
      </ItemInput>
    </div>

  </div>
</template>

<style scoped></style>
