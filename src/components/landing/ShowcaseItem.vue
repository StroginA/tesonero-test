<script>

export default {
    props: {
        iconSrc: String,
        description: String
    }
}
</script>

<template>
    <div class="item">
        <img class="item__icon" :src="iconSrc" />
        <p class="item__description">{{description}}</p>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
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