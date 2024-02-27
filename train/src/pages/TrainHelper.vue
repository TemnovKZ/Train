<script setup>

import {ref} from "vue";
import BackArrow from "@/components/BackArrow.vue";

    let done = ref(0)
    let repeat = ref(4)

    function addDone() {
        if (done.value < repeat.value) {
            done.value += 1
        }
    }

    function reset() {
        done.value = 0
    }

</script>

<template>

    <BackArrow/>

    <div class="main">

        <div class="flex flex-col text-center">
            <span class="mb-4 text-xl">Сколько подходов?</span>
            <input class="py-2 px-4 border-2 border-cyan-400 focus:border-cyan-800 text-xl outline-none" v-model="repeat" type="number">
        </div>


        <div class="flex flex-col items-center">

            <span class="text-3xl text-cyan-800 m-10">
                {{ done }} | {{ repeat }}
            </span>

            <button
                class="button flex justify-center items-center shadow-2xl text"
                @click="addDone"
            >
                <img
                    v-if="done < repeat"
                    class="w-1/2"
                    src="../image/emoji-gym.png"
                    alt="man"
                >
                <img
                    v-if="done === repeat"
                    class="w-1/2"
                    src="../image/done.png"
                    alt="done"
                >

            </button>

        </div>

        <button
            class="p-4 rounded-lg bg-cyan-300 text-cyan-900 text-xl"
            @click="reset"
        >
            Сбросить
        </button>

    </div>
</template>

<style scoped>

    .main {
        @apply
        flex
        flex-col
        items-center
        justify-evenly
        h-screen
        w-screen
        pt-40
    }

    .button {
        @apply
        h-52
        w-52
        rounded-full
        bg-cyan-300
    }

</style>