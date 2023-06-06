<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Example from "./components/Example.vue";

import { computed, onMounted, reactive, ref, watch } from 'vue';


const msg = ref<string | number>("Some Message");

msg.value = "Other"

const reactiveInformation = reactive({
  a: "Teszt A",
  b: "Teszt B",
  c: 2,
  d: {
    a: "asd",
    b: "asd"
  },
  reactiveArray: [
    {
      content: "Some String",
      show: true,
    },
    {
      content: "Some String 2",
      show: true,
    },
    {
      content: "Some String 3",
      show: false,
    },
    {
      content: "Some String 4",
      show: true,
    }

  ]

});


const dynamic = ref({
  A: "asd"
});

let i = 0;

setInterval(() => {
  console.log("Asd");


  dynamic.value.A = "asd" + i;
  i++;
  reactiveInformation.c++;

  if (reactiveInformation.reactiveArray.length < 10) {
    reactiveInformation.reactiveArray.push({
      content: "Some String " + (reactiveInformation.reactiveArray.length + 1),
      show: true,
    });
  }


  reactiveInformation.reactiveArray[2].show = true;
}, 2000);


onMounted(() => {

});

/**
 * SOme  doc
 * @param value 
 * @param div 
 */
function isDivWith(value: number, div: number) {
  return value % div == 0;
}


const computedProp = computed(() => {
  return reactiveInformation.reactiveArray.map((item) => {
    return item.content;
  }).join(" | ");
});


watch(reactiveInformation.reactiveArray, (newVal, oldValue) => {
  console.log("Watch value", newVal, oldValue);
})


</script>

<template>
  <div>

    ALl Content {{ computedProp }}
    <ul>
      <template v-for="(item, key) in reactiveInformation.reactiveArray">
        <li v-if="item.show" :id="'item-key' + key" :asdAsd="'key' + key">
          {{ key }} - {{ item.content }}
        </li>
      </template>
    </ul>
  </div>
  <!--V Show-->
  <div v-show="isDivWith(reactiveInformation.c, 5)"> Is div. wit 5 </div>
  <div v-show="isDivWith(reactiveInformation.c, 3)">Is div. wit 3</div>


  <!---V IF--->
  <div v-if="isDivWith(reactiveInformation.c, 5)"> Is div. wit 5 </div>
  <div v-else-if="isDivWith(reactiveInformation.c, 3)">Is div. wit 3</div>
  <div v-else>Don't know</div>



  <div>
    Composition api MSG:{{ msg }}
  </div>

  <div>

    D:{{ dynamic }}
  </div>

  <div>
    Some Reactive: {{ reactiveInformation.c }}
  </div>





  <header>
    <!--Teszt!-->
  </header>

  <!--<RouterView />-->



</template>

<style scoped></style>
