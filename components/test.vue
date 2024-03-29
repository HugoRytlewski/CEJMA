<script setup>
const {
  titre,

} = defineProps({
titre: String,
});

</script>

<template>
<div class="h-44 w-96 bg-neutral-700 rounded-xl flex items-center justify-center text-white hover:scale-110 duration-300 cursor-pointer">
    {{titre}}

</div>

</template>