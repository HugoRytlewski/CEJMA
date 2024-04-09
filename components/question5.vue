<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
  <div @click="isOpen=!isOpen" class="h-44 md:w-96 w-60 bg-[#95D5B2]	rounded-xl flex items-center justify-center p-6 text-[#FFFFFF] cursor-pointer font-bold ">
    Le concept

</div>
<transition>
<div v-if="isOpen" class="h-screen w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
  <div class="h-[50rem] w-[90rem] bg-neutral-800 rounded-lg">
    <p @click="isOpen=false" class="text-white  cursor-pointer p-6 text-xl font-bold">X</p>
    

    <div class="p-4">
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">Genèse :</h2>
        <p>Né de la nécessité de renforcer les compétences en cybersécurité face aux défis numériques croissants, le CampusCyber a été lancé pour répondre à la demande croissante de professionnels qualifiés.</p>
    </div>
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">Missions :</h2>
        <p> Le CampusCyber a pour missions de former les talents de demain, de promouvoir la recherche innovante en cybersécurité et de favoriser le rayonnement international de l'expertise française dans ce domaine.</p>
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