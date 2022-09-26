<script setup>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';

</script>

<template>
    <div class="features">
        <div class="features__header">
            <DividerHorizontal class="divider" />
            <h2 class="h2">Lorem ipsum, dolor sit adipisicing elit.</h2>
            <p class="features__subtitle">Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.features {
    display: flex;
    flex-direction: column;
    background-color: $white-2;
    padding-left: 5.5625rem;
    padding-right: 10.4375rem;
    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6.3125rem;
        margin-bottom: 0.5rem;
        &>.divider {
            margin-bottom: 0.75rem;
        }
        &>.h2 {
            margin-bottom: 1.5rem;
        }
    }
    &__subtitle {
        text-align: center;
    }
}
</style>