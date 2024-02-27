<script setup>
</script>

<template>

    <div class="main">

        <div class="page-container">

            <RouterLink to="/train" class="main-link">
                TRENYA
            </RouterLink>

            <RouterLink to="/calendar" class="main-link">
                KALENDAR
            </RouterLink>

            <RouterLink to="/PhotoArchive" class="main-link">
                ARXIV
            </RouterLink>

        </div>

    </div>

</template>

<style scoped>
    .main {
        @apply
        h-screen
        flex
        flex-col
        justify-center
        relative
    }

    .page-container {
        @apply
        flex
        flex-col
        justify-center
        items-center
        gap-10
    }

    .main-link {
        @apply
        w-4/5
        px-4
        py-8
        bg-cyan-400
        border-cyan-200
        text-center
        rounded-xl
        text-amber-50
    }
</style>