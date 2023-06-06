import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/contract/Task'

/**
 * 

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})*/


interface TaskState {
  task: Task[],
  taskListActive: Boolean,
}



export const useTaskStore = defineStore('task', {
  state: (): TaskState => ({
    task: [],
    taskListActive: false,
  }
  ),
  getters: {
    getFirstTask(state) {
      if (state.task.length > 0) {
        return state.task[0];
      }
    }
  },
  actions: {
    addTask(task: Task): void {
      this.task.push(task);
      

    },
  },
})
