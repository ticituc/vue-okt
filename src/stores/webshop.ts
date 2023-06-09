

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/contract/Task'
import axios from "axios"


export const useWebshopStore = defineStore('webshop', {
    state: (): { items: any } => ({
        items: [
            {
                id: 1,
                name: "A 1",
                price: 123
            },
            {
                id: 2,
                name: "A 2",
                price: 321
            },
            {
                id: 3,
                name: "A 3",
                price: 456
            },
            {
                id: 4,
                name: "A 4",
                price: 789
            }
        ]
    }),
    getters: {

    },
    actions: {
        getData(forced?: boolean) {
            console.log("forced", forced);
        }
    },
})





