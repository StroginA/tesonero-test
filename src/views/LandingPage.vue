<script setup>
import Showcase from './landing/Showcase.vue';
import Quotes from './landing/Quotes.vue';
import Features from './landing/Features.vue';

</script>

<template>
    <Showcase />
    <div class="landing-cols">
        <Features class="landing-cols__col" />
        <Quotes class="landing-cols__col" />
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.landing-cols {
    display: flex;
    &__col {
        width: 50%;
    }
}
</style>