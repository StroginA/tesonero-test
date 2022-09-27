<script setup>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';
import ShowcaseCarousel from '../../components/landing/ShowcaseCarousel.vue';

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
            <ShowcaseCarousel class="showcase__items" />
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
            width: 13.625rem;
            &_touchscreen {
                display: block;
                margin: 0 auto 2.375rem;
            }
            &_desktop {
                display: none;
            }
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
        }
    }
}
</style>