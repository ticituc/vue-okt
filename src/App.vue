<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, reactive, ref, watch } from 'vue';

import type { Task } from '@/contract/Task';

import AddItem from "./components/todo/AddItem.vue";
import TaskList from "./components/todo/TaskList.vue";
import { useTaskStore } from './stores/counter';

const taskList = ref<Task[]>([]);

function itemAdded(task: Task) {
  taskList.value.push(task);
}

const taskStore = useTaskStore();

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



  <AddItem @item-added="itemAdded"></AddItem>

  <TaskList :tasks="taskList" style="margin-top:100px">
  </TaskList>
</template>

<style scoped></style>
