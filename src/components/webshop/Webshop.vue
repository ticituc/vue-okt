<script setup lang="ts">
import { useWebshopStore } from '@/stores/webshop';
import WebshopItem from './WebshopItem.vue';
import { onMounted } from 'vue';


const webshopStore = useWebshopStore();

onMounted(()=>{
    //webshopStore.getData()
})



</script>

<template>
    <div>
        <h1>webShop Component</h1>

        <div v-for="item in webshopStore.items" :id="'webshop-product-' + item.id">
            <WebshopItem :id="item.id" :name="item.name" :price="item.price">
            </WebshopItem>
        </div>
    </div>
</template>

<style scoped></style>
