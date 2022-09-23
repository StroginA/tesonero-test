<script>
    export default {
        props: {
            isActive: Boolean
        }
    }
</script>

<template>
    <button class="button" :class="{ 'button_active' : isActive }">
        <span class="button__text">
            <slot></slot>
        </span>
    </button>
</template>

<style scoped lang="scss">
    @import "../assets/vars";
    .button {
    border: 0;
    background-color: transparent;
    color: $grey-2;
    padding: 0.25rem 1.5rem;
    border-radius: 0.5rem;
    &:hover {
        background-color: $grey-1;
        cursor: pointer;
    }

    &_active {
        &:hover {
            background-color: $highlight;
            filter: brightness(0.9);
        }
        background-color: $highlight;
        color: $white-1;
        box-shadow: 0 0.5rem 1rem $highlight-shadow;
    }

    &__text {
        line-height: 1.5rem;
    }
}
</style>
