<script>
export default {
    name: 'ShowcaseItem',
    props: {
        iconSrc: String,
        description: String
    }
}
</script>

<template>
    <div class="item">
        <div class="item__wrapper">
        <img class="item__icon" :src="iconSrc" />
        <p class="item__description">{{description}}</p>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.item {
    &__wrapper {
        display: flex;
    flex-direction: column;
    align-items: center;
}
    width: 12rem;
    &__icon {
        width: 6.25rem;
        height: 6.25rem;
    }
    &__description {
        text-align: center;
        line-height: 1.172rem;
    }
}
</style>