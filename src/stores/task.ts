import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/contract/Task'
import axios from "axios"
import { useRandomStore } from './random'
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
  taskListActive: boolean,
  saveInProgress: boolean
}



export const useTaskStore = defineStore('task', {
  state: (): TaskState => ({
    tasks: [

    ],
    taskListActive: false,
    saveInProgress: false
  }
  ),
  getters: {
    localTasks() {
      return JSON.parse(localStorage.getItem('tasks') ?? "");
    },
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
    },

    getRandomTask(state) {
      this.getTaskById(this.randomStore.makeRandomNumber());
    },
    randomStore() {
      const randomStore = useRandomStore()

      return randomStore;
    }
  },
  actions: {
    async addTask(task: Task): Promise<Task> {
      const res = await axios.post("http://localhost:3000/add", task);

      this.tasks.push(res.data);

      return res.data;

    },
    async getTasks(force?: boolean) {

      if (this.tasks.length == 0 || force) {

        const res = await axios.get("http://localhost:3000/get")

        if (res.status >= 200 && res.status < 300) {
          this.tasks = res.data as Task[];

          return this.tasks;
        }
        throw new Error("Error with the request");
      }

      return this.tasks;
    }
  },
})





