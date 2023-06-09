<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useTaskStore } from './stores/task';
import { useAuthStore } from './stores/auth';

const router = useRouter();

const taskStore = useTaskStore();


console.log("window.location:", window.location);


function delayNavigate() {
  setTimeout(() => {
    router.push({ name: "todoItem", params: { id: 3 } })
  }, 5000);

}
const authStore = useAuthStore();
function authorization() {
  authStore.isAuth = true;
}

</script>

<template>
  <div class="">
    <example></example>

    <header>
      <ex-test></ex-test>

      <button class="btn btn-danger" @click="authorization">Login</button>
      <br />
      <br />
      <a href="/about">About</a>
      <br />
      <RouterLink to="about">About Router Link</RouterLink>

      <br />
      <br />

      <a href="/todo-item/2">TODO ITem</a>
      <br />
      <RouterLink :to="{ name: 'todoItem', params: { id: '2' } }">About Router Link</RouterLink>

    </header>

    <pre>{{ taskStore.tasks }}</pre>

    <button class="btn btn-warning" @click="delayNavigate">Delay Navigate</button>

    <RouterView></RouterView>
    <footer>Footer</footer>


  </div>
</template>

<style scoped></style>
