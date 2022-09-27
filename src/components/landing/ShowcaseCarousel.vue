<script>
import ShowcaseItem from '../../components/landing/ShowcaseItem.vue';
import { vueWindowSizeMixin } from 'vue-window-size/option-api';

import { Navigation, Pagination } from 'swiper';
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';

import 'swiper/swiper-bundle.css';

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
                    iconSrc: this.constructURL('Device.svg'),
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 1,
                    iconSrc: this.constructURL('Square.svg'),
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 2,
                    iconSrc: this.constructURL('Headset.svg'),
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 3,
                    iconSrc: this.constructURL('Clipboard.svg'),
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 4,
                    iconSrc: this.constructURL('Headset.svg'),
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    id: 5,
                    iconSrc: this.constructURL('Square.svg'),
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
            ]
        })
    },
    methods: {
        constructURL: function (filename) {
            return new URL('./icons_showcase/' + filename, import.meta.url).href;
        }
    }
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