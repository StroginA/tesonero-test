<script setup>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';
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
    <div class="showcase">
        <img class="showcase__bg-main showcase__bg-main_touchscreen" 
        src="@/assets/icons/bg/Berry.png"
        alt="Berry image" />
        <img class="showcase__bg-secondary showcase__bg-secondary_left" 
        src="@/assets/icons/bg/Drops.png"
        alt="Water drops" />
        <img class="showcase__bg-secondary showcase__bg-secondary_right" 
        src="@/assets/icons/bg/Drops.png"
        alt="Water drops" />
        <div class="showcase__header">
            <DividerHorizontal class="divider" />
            <h1 class="h1">Lorem ipsum, dolor sit amet consectetur</h1>
        </div>
        <div class="showcase__main">
            <img class="showcase__bg-main showcase__bg-main_desktop" 
            src="@/assets/icons/bg/Berry.png"
            alt="Berry image" />
            <div class="showcase__items">
                <ShowcaseItem class="showcase__item" 
                v-for="item in items" 
                :key="item.id" 
                :iconSrc="item.iconSrc"
                :description="item.description" />
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
        // have to use phone-first here for convenience of including
        @media only screen and (min-width: 992px) {
            @include on-circle($item-count: 6, $circle-size: 40rem, $item-size: 12rem);
        } 
    }

    &__bg-main {
        filter: drop-shadow(0px 40px 80px rgba(0, 0, 0, 0.16));
        &_desktop {
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            // centering
            margin: -8rem -13.625rem;
            width: 27.25rem;
        }
        &_touchscreen {
            display: none;
        }
    }

    &__bg-secondary {
        position: absolute;
        display: block;
        filter: blur(5px);

        &_left {
            left: 0;
            bottom: -5rem;
            width: 27.5rem;
            transform: rotate(55.73deg);
        }

        &_right {
            top: 5rem;
            right: -4rem;
            width: 36.75rem;
            transform: rotate(135.54deg);
        }
    }
}

// touch device
@media only screen and (max-width: 992px) {
    .showcase {
        background: 0;
        padding-top: 4rem;
        padding-bottom: 5rem;
        
        &__bg-main {
            &_desktop {
                display: none;
            }
            &_touchscreen {
                display: block;
                margin: 0 auto 2.375rem;
            }

            width: 13.625rem;
        }

        &__bg-secondary {
            display: none;
        }

        &__header {
            &>.h1 {
                font-size: 1.5rem;
                line-height: 1.75rem;
            }

            &>.divider {
                display: none;
            }
        }
        &__items {
            margin: 0;
            display: flex;
            overflow-x: auto;
        }
    }
}
</style>