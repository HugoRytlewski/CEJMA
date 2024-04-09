<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
  <div @click="isOpen=!isOpen" class="h-44 md:w-96 w-60 bg-[#95D5B2]	rounded-xl flex items-center justify-center p-6 text-[#FFFFFF] cursor-pointer font-bold ">
    Qu'est-ce que l'Appel de Paris ?

</div>
<transition>
<div v-if="isOpen" class="h-screen w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
  <div class="h-[50rem] w-[90rem] bg-neutral-800 rounded-lg">
    <p @click="isOpen=false" class="text-white  cursor-pointer p-6 text-xl font-bold">X</p>
    

    <div class="p-4">
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold"></h2>
        <p>L'Appel de Paris est une initiative lancée par la France en 2018 pour promouvoir un cyberespace sûr et ouvert. Il appelle les États, les entreprises et la société civile à respecter le droit international et les droits de l'Homme dans le cyberespace. Cela inclut des principes tels que le comportement responsable des États et la reconnaissance des responsabilités des acteurs privés. L'objectif est de mobiliser un large soutien pour renforcer la sécurité et la confiance dans le cyberespace.





</p>
    </div>
    
  </div>
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