<script setup>

</script>

<template>
    <RouterLink to="/">
        <img class="back-arrow" src="../image/back-arrow.png" alt="backarrow">
    </RouterLink>
</template>

<style scoped>

    .back-arrow {
        @apply
        p-[10px]
        h-[50px]
        rotate-180
        bg-cyan-400
        rounded-full
        absolute
        top-6
        left-6
    }
</style>