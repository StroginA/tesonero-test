<script setup>

</script>
<template>
    <div class="main-quote">
        <img class="main-quote__avatar" 
        src="@/assets/icons/common/Avatar.png" 
        alt="Avatar" />
        <div class="main-quote__body">
            <img class="main-quote__quote-mark" 
            src="@/assets/icons/common/Quotes.svg" />
            <p class="main-quote__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
 animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi
 expedita, provident excepturi officia!
 Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
            </p>
            <p class="main-quote__name">Jane Doe</p>
            <img class="main-quote__quote-mark main-quote__quote-mark_reverse" 
            src="@/assets/icons/common/Quotes.svg" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.main-quote {
    display: flex;
    align-items: flex-start;
    &__avatar {
        display: block;
        width: 30%;
        max-width: 11rem;
    }
    &__body {
        padding-left: 4rem;
        width: 70%;
        padding-right: 1.5rem;
    }
    &__text {
        margin-bottom: 1rem;
    }
    &__name {
        line-height: 1.172rem;
        font-weight: 700;
    }
    &__quote-mark {
        position: absolute;
        top: 0;
        left: 0;
        &_reverse {
            transform: rotate(180deg);
            top: unset;
            left: unset;
            bottom: 0;
            right: 0;
        }
    }
}
</style>