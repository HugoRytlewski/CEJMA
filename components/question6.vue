<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
  <div @click="isOpen=!isOpen" class="h-44 md:w-96 w-60 bg-[#95D5B2]	rounded-xl flex items-center justify-center p-6 text-[#FFFFFF] cursor-pointer font-bold ">
    L'écosystème 

</div>
<transition>
<div v-if="isOpen" class="h-screen w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
  <div class="h-[50rem] w-[90rem] bg-neutral-800 rounded-lg">
    <p @click="isOpen=false" class="text-white  cursor-pointer p-6 text-xl font-bold">X</p>
    

    <div class="p-4">
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">Recherche :</h2>
        <p> Le Campus Cyber encourage la recherche innovante en cybersécurité en offrant un environnement propice à l'expérimentation et à la collaboration entre chercheurs et entreprises.</p>
    </div>
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">Talents :</h2>
        <p> Il soutient la formation et l'essor des talents en proposant des programmes de formation initiale et continue dans le domaine de la cybersécurité, permettant ainsi de répondre aux besoins du marché et d'attirer les meilleurs experts.</p>
    </div>
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
      <h2 class="text-lg font-semibold">Rayonnement :</h2>
      <p>Grâce à ses partenariats, événements et initiatives de sensibilisation, le Campus Cyber contribue au rayonnement de l'excellence française en matière de cybersécurité, tant au niveau national qu'international.</p>
    </div>
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
      <h2 class="text-lg font-semibold">Membres :</h2>
      <p>Le Campus Cyber rassemble une communauté diversifiée de membres, comprenant des entreprises, des institutions publiques, des universités, des laboratoires de recherche, des associations professionnelles et des acteurs de la société civile engagés dans la sécurité numérique.</p>
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