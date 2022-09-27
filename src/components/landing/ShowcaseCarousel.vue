<script>
import ShowcaseItem from '../../components/landing/ShowcaseItem.vue';
import { vueWindowSizeMixin } from 'vue-window-size/option-api';

import { Navigation, Pagination } from 'swiper';
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';

import 'swiper/swiper-bundle.css';
import headsetSrc from '@/assets/icons/showcase_items/Headset.svg';
import deviceSrc from '@/assets/icons/showcase_items/Device.svg';
import squareSrc from '@/assets/icons/showcase_items/Square.svg';
import clipboardSrc from '@/assets/icons/showcase_items/Clipboard.svg';

SwiperCore.use([Navigation, Pagination]);

export default {
    mixins: [vueWindowSizeMixin()],
    components: { ShowcaseItem, Swiper, SwiperSlide },
    data() {
        return ({
            modules: { Navigation, Pagination },
            items: [
                {
                    id: 0,
                    iconSrc: deviceSrc,
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 1,
                    iconSrc: squareSrc,
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 2,
                    iconSrc: headsetSrc,
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 3,
                    iconSrc: clipboardSrc,
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 4,
                    iconSrc: headsetSrc,
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 5,
                    iconSrc: squareSrc,
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
            ]
        })
    },
}
</script>

<template>
    <!--to inherit class properly-->
    <div>
        <!--desktop-->
        <div v-if="$windowWidth >= 992" class="carousel">
            <ShowcaseItem class="carousel__item" 
            v-for="item in items" 
            :key="item.id" 
            :iconSrc="item.iconSrc"
            :description="item.description" />
        </div>

        <!-- touch device -->
        <swiper v-else class="carousel" 
        :modules="modules" 
        :slides-per-view="1" 
        loop 
        navigation 
        pagination>
            <swiper-slide class="carousel__slide" 
            v-for="item in items" 
            :key="item.id">
                <ShowcaseItem class="carousel__item" 
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