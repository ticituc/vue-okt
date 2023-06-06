

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/contract/Task'
import axios from "axios"
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




export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuth: false
    }),
    getters: {

    },
    actions: {
        auth() {
            this.isAuth = true;
            return true;
        }
    },
})





