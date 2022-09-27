<script setup>

import ShowcaseItem from '../../components/landing/ShowcaseItem.vue';

const items = [
    {
        id: 0,
        iconSrc: "/src/assets/icons/showcase_items/Device.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 1,
        iconSrc: "/src/assets/icons/showcase_items/Square.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        iconSrc: "/src/assets/icons/showcase_items/Headset.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        iconSrc: "/src/assets/icons/showcase_items/Clipboard.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        iconSrc: "/src/assets/icons/showcase_items/Headset.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 5,
        iconSrc: "/src/assets/icons/showcase_items/Square.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
];
</script>

<template>
    <div class="carousel">
        <ShowcaseItem class="carousel__item" v-for="item in items" :key="item.id" :iconSrc="item.iconSrc"
            :description="item.description" />
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.carousel {

    // have to use phone-first here for convenience of including
    @media only screen and (min-width: 992px) {
        @include on-circle($item-count: 6, $circle-size: 40rem, $item-size: 12rem);
    }
}

// touch device
@media only screen and (max-width: 992px) {
    .carousel {
        display: flex;
        overflow-x: auto;
    }
}
</style>