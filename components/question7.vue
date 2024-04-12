<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
  <div @click="isOpen=!isOpen" class="h-44 md:w-96 w-60 bg-[#95D5B2]	rounded-xl flex items-center justify-center p-6 text-[#FFFFFF] cursor-pointer font-bold ">
    Présentation 

</div>
<transition>
<div v-if="isOpen" class="h-screen w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
  <div class="h-[50rem] w-[90rem] bg-neutral-800 rounded-lg">
    <p @click="isOpen=false" class="text-white  cursor-pointer p-6 text-xl font-bold">X</p>
    

    <div class="p-4">
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">Presentation :</h2>
        <p> Le Campus Cyber régional de la région Auvergne-Rhône-Alpes, situé à Lyon, se distingue par son dynamisme économique et son expertise en matière de cybersécurité. Collaborant étroitement avec les universités locales, les pôles de compétitivité et les entreprises innovantes de la région, ce campus régional constitue un centre d'excellence où recherche, formation et innovation se conjuguent pour relever les défis de la sécurité numérique. Grâce à son positionnement stratégique au cœur de l'Europe et à sa forte concentration de compétences, le Campus Cyber de Lyon contribue à renforcer la résilience numérique de la région et à promouvoir son leadership dans le domaine de la cybersécurité.</p>
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