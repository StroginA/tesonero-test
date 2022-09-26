<script>

export default {
    props: {
        iconSrc: String,
        title: String,
        body: String,
        isActive: Boolean
    }
}
</script>

<template>
    <div class="feature">
        <div class="feature__header">
            <div class="feature__icon">
            </div>
            <h3 class="feature__title">{{title}}</h3>
            <img src="@/assets/icons/common/ArrowMini.svg" 
            class="feature__dropdown-arrow"
            :class="{ 'feature__dropdown-arrow_flipped' : isActive }" />
        </div>
        <div class="feature__text"
        v-show="isActive">
            <p>{{body}}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.feature {
    &__header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    &__icon {
        width: 2.5rem;
        height: 2.5rem;
        background-image: v-bind(imgSrc);
        margin-right: 1.5rem;
    }
    &__title {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.758rem;
    }
    &__dropdown-arrow {
        margin-left: auto;
        &_flipped {
            transform: rotate(180deg);
        }
    }
    &__text {
        padding-left: 4rem;
        line-height: 1.172rem;
    }
}
</style>

