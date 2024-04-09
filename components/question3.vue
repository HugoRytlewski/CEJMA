<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
  <div @click="isOpen=!isOpen" class="h-44 md:w-96 w-60 bg-[#95D5B2]	rounded-xl flex items-center justify-center p-6 text-[#FFFFFF] cursor-pointer font-bold ">
    Comment se décline la cyberdiplomatie française au niveau européen et international ?


</div>
<transition>
<div v-if="isOpen" class="h-screen overflow-scroll md:overflow-hidden  w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
  <div class="md:h-[50rem] w-[90rem] bg-neutral-800 rounded-lg p-6 relative">
    <p @click="isOpen=false" class="text-white absolute right-3 md:right-7 top-[23rem] md:top-4 cursor-pointer text-xl font-bold">X</p>
    <h1 class="text-white text-lg font-bold md:mt-6 pt-96 md:pt-0">
      Comment se décline la cyberdiplomatie française au niveau européen et international ?
    </h1>
    <div class="flex flex-col gap-6 mt-10">

    <div class="flex flex-col gap-2 bg-neutral-900 p-6  rounded-lg">
      <h2 class=" text-white text-xl">
        - Promotion de l'autonomie stratégique numérique de l'Union européenne (UE)
      </h2>
      <p class="text-white">La France défend une UE capable de gérer ses intérêts numériques et de protéger ses valeurs.</p>  
    </div>

    <div class="flex flex-col gap-2 bg-neutral-900 p-6  rounded-lg">
      <h2 class="text-white  text-xl">
        - Coopération internationale 
      </h2>
      <p class="text-white">Elle travaille avec les autres États membres pour élaborer des politiques communes et renforcer la coopération opérationnelle.</p>
    </div>

    
    
    <div class="flex flex-col gap-2 bg-neutral-900 p-6  rounded-lg">
      <h2 class="text-white text-xl">
        - Participation aux initiatives européennes 
      </h2>
      <p class="text-white">La France participe à des forums pour élaborer des normes internationales et coopère avec d'autres pays pour lutter contre les menaces cybernétiques.</p>
    </div>

    <div class="flex flex-col gap-2 bg-neutral-900 p-6  rounded-lg">
      <h2 class="text-white text-xl">
        - L'Appel de Paris
      </h2>
      <p class="text-white">L'initiative mobilise la communauté internationale autour de principes pour un cyberespace sûr et ouvert.</p>
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