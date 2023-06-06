<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter();

const route = useRoute()





console.log(" route", route)

</script>

<template>
    Todo: item ID: {{ $route.params.id }}-----{{ route.params.id }}
</template>