<script setup>
import ShowcaseItem from '../../components/landing/ShowcaseItem.vue';
import {VueScreenSizeMixin} from 'vue-screen-size';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


const modules = [Navigation, Pagination, A11y];

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

<script>
    export default {
        mixins: [VueScreenSizeMixin],
        modules: [Navigation, Pagination, A11y],
    }
</script>

<template>
    <!--to inherit class properly-->
    <div> 
        <!--desktop-->
        <div class="carousel"
        v-if="$vssWidth >= 992">
            <ShowcaseItem class="carousel__item" 
            v-for="item in items"
            :key="item.id" 
            :iconSrc="item.iconSrc"
            :description="item.description" />
        </div>

        <!-- touch device -->
        <swiper v-else
        class="carousel"
        :modules="modules"
        :slides-per-view="1"
        loop
        navigation
        pagination>
            <swiper-slide class="carousel__slide" 
            v-for="item in items">
                <ShowcaseItem  class="carousel__item"
                :key="item.id" 
                :iconSrc="item.iconSrc"
                :description="item.description" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";
@import "@/assets/slider";

.carousel {
    margin: 0 auto;
    @media only screen and (min-width: 992px) {
        @include on-circle($item-count: 6, $circle-size: 40rem, $item-size: 12rem);
    }
}

@media only screen and (max-width: 992px) {
    .carousel {
        &__item {
            margin: 0 auto;
        }
    }
}
</style>