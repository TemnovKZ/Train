<script setup>
import BackArrow from "@/components/BackArrow.vue";
const imagesNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', ]
</script>

<template>
    <BackArrow/>

    <div class="image-container">
        <img
            v-for="name in imagesNames"
            :key="name"
            :src="`../src/image/archive/${name}`"
            class="image"
        >
    </div>
</template>

<style scoped>

    .image-container {
        @apply
            py-10
        flex
        justify-center
        gap-6
        flex-wrap
    }

    .image {
        @apply
        w-1/4
    }

</style>