<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
  <div @click="isOpen=!isOpen" class="h-44 md:w-96 w-60 bg-emerald-500	rounded-xl flex items-center justify-center p-6 text-white cursor-pointer font-bold ">
    Quelles ont été les différentes étapes de mise en oeuvre du dispositif français ?


</div>
<transition>
  <div v-if="isOpen" class="h-screen overflow-scroll  w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
    <div class="md:h-[50rem] w-[90rem] bg-neutral-800 rounded-lg p-6 relative">
      <p @click="isOpen=false" class="text-white absolute right-3 md:right-7 top-[23rem] cursor-pointer text-xl font-bold">X</p>
    <h1 class="text-white text-lg font-bold md:mt-6 pt-96">
      Quelles ont été les différentes étapes de mise en oeuvre du dispositif français ?
    </h1>
    <div class="flex flex-col gap-6 mt-10">

    <div class="flex flex-col gap-2 bg-neutral-900 p-6  rounded-lg">
      <h2 class=" text-xl">
        - Stratégie nationale pour la sécurité du numérique (2015) 
      </h2>
      <p>La France a élaboré une stratégie nationale pour répondre aux nouveaux défis liés à la sécurité numérique, en mettant l'accent sur la protection des infrastructures critiques et la lutte contre la cybercriminalité.</p>
  
    </div>

    <div class="flex flex-col gap-2 bg-neutral-900 p-6  rounded-lg">
      <h2 class=" text-xl">
        - Stratégie internationale de la France pour le numérique (2017) 
      </h2>
      <p>Pour renforcer son influence et sa coopération internationale dans le domaine de la cybersécurité, la France a développé une stratégie internationale axée sur la gouvernance, l'économie et la sécurité numérique.</p>
  
    </div>

    
    <div class="flex flex-col gap-2 bg-neutral-900 p-6  rounded-lg">
      <h2 class=" text-xl">
      - Revue stratégique de cyberdéfense (2018) 
      </h2>
      <p>Une revue stratégique a été réalisée pour évaluer les objectifs et les moyens de la stratégie nationale de cyberdéfense, afin de garantir sa pertinence et son efficacité face à l'évolution des menaces cybernétiques.</p>
  
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