<script setup lang="ts">
const props = defineProps<{
    id: number | string,
    name: string,
    price: number
}>();

</script>

<template>
    <div>
        <h3>{{ props.name }}</h3>
        <p>{{ props.price }} Ft</p>

        <span>ID: {{ props.id }}</span>
    </div>
</template>

<style scoped></style>
