<script setup>
  const isOpen = ref(false);


useScrollFixed(isOpen);

</script>

<template>
  <div @click="isOpen=!isOpen" class="h-44 md:w-96 w-60 bg-[#95D5B2]	rounded-xl flex items-center justify-center p-6 text-[#FFFFFF] cursor-pointer font-bold ">
    Quels sont acteurs qui contribuent à l’efficacité du dispositif français de lutte contre la cybersécurité ?

</div>
<transition>
<div v-if="isOpen" class="h-screen w-screen bg-neutral-950 bg-opacity-60  fixed top-0 left-0 flex items-center justify-center">
  <div class="h-[50rem] w-[90rem] bg-neutral-800 rounded-lg">
    <p @click="isOpen=false" class="text-white  cursor-pointer p-6 text-xl font-bold">X</p>
    

    <div class="p-4">
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">L'Agence nationale de sécurité des systèmes d'information (ANSSI)</h2>
        <p>Établie en 2009, l'ANSSI est l'autorité nationale en matière de cybersécurité en France. Elle est chargée de la prévention et de la réaction aux incidents informatiques visant les institutions sensibles, ainsi que de l'organisation d'exercices de gestion de crises au niveau national.</p>
    </div>
    <div class="mb-4 bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">Le ministère des Armées :</h2>
        <p>En plus d'assurer la protection des réseaux essentiels à son action, le ministère des Armées intègre également la dimension du combat numérique au cœur de ses opérations militaires. Il a créé un commandement de cyberdéfense pour consolider ses actions dans ce domaine.</p>
    </div>
    <div class="bg-neutral-900 text-white rounded-lg p-4">
        <h2 class="text-lg font-semibold">Le ministère de l'Intérieur</h2>
        <p>Chargé de lutter contre toutes les formes de cybercriminalité, ce ministère mobilise les services centraux spécialisés ainsi que les réseaux territoriaux de la police nationale, de la gendarmerie nationale et de la sécurité intérieure. Ces services mènent des enquêtes visant à identifier les auteurs d'actes de cybermalveillance et à les déférer à la justice, tout en contribuant à la prévention et à la sensibilisation du public.</p>
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