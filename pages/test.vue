<template>
    <div class="w-screen min-h-screen flex justify-center items-start flex-col gap-12 bg-black p-8 pt-96">
        <!-- Scroll instruction -->
        <div class="text-center w-full mb-12">
            <p class="text-gray-400 text-xl">↓ Scroll down slowly to see animations trigger ↓</p>
        </div>

        <!-- Auto Mode (default) -->
        <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Auto Mode</p>
            <h1 class="text-4xl font-bold">
                <scrambledtext text="Auto Mode Default" :delay="0" />
            </h1>
        </div>

        <!-- Duration Mode Examples -->
        <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Duration Mode: 1000ms</p>
            <h2 class="text-3xl">
                <scrambledtext text="Fast Duration (1s)" mode="duration" :duration="1000" :delay="0" />
            </h2>
        </div>

        <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Duration Mode: 3000ms</p>
            <h2 class="text-3xl">
                <scrambledtext text="Slow Duration (3s)" mode="duration" :duration="3000" :delay="0" />
            </h2>
        </div>

        <!-- Percentage Mode Examples -->
        <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Percentage Mode: 25%</p>
            <h2 class="text-3xl">
                <scrambledtext text="Twenty Five Percent Revealed" mode="percentage" :percentage="25" :delay="0" />
            </h2>
        </div>

        <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Percentage Mode: 50%</p>
            <h2 class="text-3xl">
                <scrambledtext text="Fifty Percent Revealed Here" mode="percentage" :percentage="50" :delay="0" />
            </h2>
        </div>

        <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Percentage Mode: 75%</p>
            <h2 class="text-3xl">
                <scrambledtext text="Seventy Five Percent Revealed" mode="percentage" :percentage="75" :delay="0" />
            </h2>
        </div>

        <!-- Combined with delays -->
        <div class="text-center mt-8">
            <p class="text-sm text-gray-500 mb-2">Duration Mode with 1s delay</p>
            <h2 class="text-3xl">
                <scrambledtext text="Delayed Scramble" mode="duration" :duration="2000" :delay="1000" />
            </h2>
        </div>

        <!-- Scroll info -->
        <div class="text-center mt-16 mb-96">
            <p class="text-gray-400">↑ Scroll up and down to see the animations trigger when entering viewport ↑</p>
        </div>
    </div>
</template>
