<script setup>
  const isOpen = ref(false);
const {
  titre,

} = defineProps({
titre: String,
});

</script>

<template>
<div @click="isOpen=!isOpen" class="h-44 w-96 bg-emerald-500	rounded-xl flex items-center justify-center p-6 text-white cursor-pointer font-bold ">
    {{titre}}

</div>
<transition>
<div v-if="isOpen" class="h-screen w-screen bg-red-500 fixed top-0 left-0">
<p @click="isOpen=!isOpen">X</p>
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