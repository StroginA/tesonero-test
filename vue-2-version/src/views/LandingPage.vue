<script setup>
import Showcase from './landing/Showcase.vue';
import Quotes from './landing/Quotes.vue';
import Features from './landing/Features.vue';

</script>

<template>
    <div class="landing">
        <Showcase />
        <div class="landing-cols">
            <Quotes class="landing-cols__col" />
            <Features class="landing-cols__col" />
        </div>
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

// touch device
@media only screen and (max-width: 992px) {
    .landing-cols {
        flex-direction: column-reverse;
        &__col {
            width: unset;
        }
    }
}
</style>