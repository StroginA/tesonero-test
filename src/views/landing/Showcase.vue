<script setup>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';
import ShowcaseItem from '../../components/landing/ShowcaseItem.vue';

const items = [
    {
        id: 0,
        iconSrc: "/src/assets/icons/showcase_items/Headset.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 1,
        iconSrc: "/src/assets/icons/showcase_items/Square.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        iconSrc: "/src/assets/icons/showcase_items/Device.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        iconSrc: "/src/assets/icons/showcase_items/Square.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        iconSrc: "/src/assets/icons/showcase_items/Headset.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 5,
        iconSrc: "/src/assets/icons/showcase_items/Clipboard.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
];

</script>

<template>
    <div class="showcase">
        <div class="showcase__header">
            <DividerHorizontal class="divider" />
            <h1 class="h1">Lorem ipsum, dolor sit amet consectetur</h1>
        </div>
        <div class="showcase__main">
            <div class="showcase__items">
                <ShowcaseItem class="showcase__item"
                v-for="item in items"
                :key="item.id"
                :iconSrc="item.iconSrc"
                :description="item.description"
                 />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.showcase {
    background: linear-gradient(111.04deg, #E2E2E2 0.39%, rgba(255, 255, 255, 0) 86.46%);
    display: flex;
    flex-direction: column;
    padding-top: 4.6875rem;

    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;    
        text-transform: uppercase;
        &>.divider {
            margin-bottom: 1.375rem;
        }
    }
    &__items {
        margin: 8rem auto 5.5rem;
        @include on-circle($item-count: 6, $circle-size: 40rem, $item-size: 12rem); 
    }
}

// touch device
@media only screen and (max-width: 992px) {
    .showcase {
        background: 0;
        padding-top: 4rem;
        padding-bottom: 5rem;
        &__header {
            &>.h1 {
                font-size: 1.5rem;
                line-height: 1.75rem;
            }
            &>.divider {
                display: none;
            }
        }
    }
}
</style>