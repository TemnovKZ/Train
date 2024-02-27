<script setup>
    import 'v-calendar/style.css'
    import BackArrow from "@/components/BackArrow.vue";

    const isDark = true
</script>

<template>
    <BackArrow/>
    <div class="h-full flex items-center justify-center px-4">
        <VCalendar  :is-dark="isDark" expanded >
            <template #footer>
                <div class="w-full px-4 pb-4">
                    <button
                        class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full px-3 py-2 rounded-md"
                        @click="moveToday"
                    >
                        Today
                    </button>
                </div>
            </template>
        </VCalendar>
    </div>

</template>

<style scoped>

    .vc-header {
        @apply
        my-8
        mx-4
    }

</style>