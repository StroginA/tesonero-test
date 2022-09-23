<script setup>
import SpanButton from './SpanButton.vue';

</script>

<template>
    <nav class="nav">
        <div class="nav__items">
            <SpanButton class="nav__item">NavItem1</SpanButton>
            <SpanButton class="nav__item">NavItem2</SpanButton>
            <SpanButton isActive class="nav__item">NavItem3</SpanButton>
        </div>
        <div class="nav__items_end">
            <SpanButton isActive class="nav__item">Button</SpanButton>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    height: 10rem;
    padding: 0 5rem;
    display: flex;
    justify-content: start;
    align-items: center;

    &__items {
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
}
</style>