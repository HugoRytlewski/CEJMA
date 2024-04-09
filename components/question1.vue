<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
<div @click="isOpen=!isOpen" class="h-44 w-96 bg-emerald-500	rounded-xl flex items-center justify-center p-6 text-white cursor-pointer font-bold ">
    titre

</div>
<transition>
<div v-if="isOpen" class="h-screen w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
  <div class="h-[50rem] w-[90rem] bg-neutral-800 rounded-lg">
    <p @click="isOpen=false" class="text-white  cursor-pointer p-6 text-xl font-bold">X</p>
    <p>description</p>

  </div>
</div>
</transition>

</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>