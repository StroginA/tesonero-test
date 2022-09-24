<script setup>
import SpanButton from './common/SpanButton.vue';
import Brand from './Brand.vue';

</script>

<template>
    <nav class="nav">
        <div class="nav__container">
            <Brand class="nav__brand nav__item" />
            <div class="nav__items">
                <SpanButton class="nav__item">NavItem1</SpanButton>
                <SpanButton class="nav__item">NavItem2</SpanButton>
                <SpanButton isActive class="nav__item">NavItem3</SpanButton>
            </div>
            <div class="nav__items nav__items_end">
                <SpanButton isActive class="nav__item">Button</SpanButton>
            </div>

        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    &__container {
        height: 10rem;
        margin: 0 5rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: start;
        align-items: center;
    }

    &__items {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        &_end {
            margin-left: auto;
        }
    }

    &__item {
        margin-right: 4rem;
        &:last-child {
            margin: 0;
        }
    }

    // more compact nav for smaller screens
    @media only screen and (max-width: 1200px) {
        .nav {
            &__container {
                margin: 0 1rem;
            }
            &__item {
                margin-right: 2rem;
            }
        }
    }

    // touch device navbar
    @media only screen and (max-width: 992px) {
        .nav {
            &__container {
                height: 7.5rem;
            }

            &__brand {
                justify-self: center;
                margin: auto;
            }

            &__items {
                display: none;
            }
        }
    }
}
</style>