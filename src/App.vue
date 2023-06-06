<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, reactive, ref, watch } from 'vue';

import type { Task } from '@/contract/Task';

import AddItem from "./components/todo/AddItem.vue";
import ItemInput from "./components/todo/ItemInput.vue";

import TaskList from "./components/todo/TaskList.vue";
import { useTaskStore } from './stores/task';


const taskList = ref<Task[]>([]);
const task = ref<Task>();

task.value = {
  description: "Test",
  storyPoint: 3

}


function itemAdded(task: Task) {
  taskList.value.push(task);
}

//const taskStore = useTaskStore();


function modelChange(newVal: any) {
  console.log("Model new Value", newVal);
}


</script>

<template>
  <TaskList :tasks="taskList">
    <template v-slot:header>
      Override Header Value
    </template>

    Override Slot Value

    <template v-slot:footer>
      Override Footer Value
    </template>
  </TaskList>



  <!--<AddItem @item-added="itemAdded"></AddItem>-->
  Task:
  <pre>{{ task }}</pre>
  <ItemInput v-model="task"></ItemInput>
  <ItemInput @change="modelChange" :modelValue="task"></ItemInput>

  <TaskList :tasks="taskList" style="margin-top:100px">
  </TaskList>
</template>

<style scoped></style>
