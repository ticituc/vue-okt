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
  tasks: Task[],
  taskListActive: Boolean,
}



export const useTaskStore = defineStore('task', {
  state: (): TaskState => ({
    tasks: [
      {
        id: 1,
        description: "Test 1",
        storyPoint: 1,
      },
      {
        id: 2,
        description: "Test 2",
        storyPoint: 1,
      },
      {
        id: 3,
        description: "Test 3",
        storyPoint: 1,
      },
      {
        id: 4,
        description: "Test 4",
        storyPoint: 1,
      },
      {
        id: 5,
        description: "Test 5",
        storyPoint: 1,
      }
    ],
    taskListActive: false,
  }
  ),
  getters: {
    firstTask(state) {
      if (state.tasks.length > 0) {
        return state.tasks[0];
      }
    },
    getTaskById(state) {
      return (taskId: number): Task | undefined => {
        return state.tasks.find((findTask) => {
          return findTask.id == taskId;
        });
      }
    }

  },
  actions: {
    addTask(task: Task): void {
      this.tasks.push(task);
    },
  },
})
