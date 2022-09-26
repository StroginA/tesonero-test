<script>

export default {
    props: {
        id: Number,
        iconSrc: String,
        title: String,
        body: String,
        isActive: Boolean
    }
}
</script>

<template>
    <div class="feature">
        <div class="feature__header"
        @click="$emit('toggle-dropdown', id)">
            <img class="feature__icon"
            :src="iconSrc">
            <h3 class="feature__title"
            :class="{'feature__title_active' : isActive}" >{{title}}</h3>
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
    padding: 0.625rem 0;
    &:hover {
        background-color: $grey-1;
    }
    &__header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }
    &__icon {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1.5rem;
    }
    &__title {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.758rem;
        &_active {
            color: $highlight;
        }
    }
    &__dropdown-arrow {
        margin-left: auto;
        &_flipped {
            transform: rotate(180deg);
        }
    }
    &__text {
        padding-left: 4rem;  // make equal to icon size + margin-right
        padding-top: 0.75rem;
        line-height: 1.172rem;
    }
}
</style>

