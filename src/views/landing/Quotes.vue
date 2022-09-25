<script setup>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';
import MainQuote from '../../components/landing/MainQuote.vue';

</script>

<template>
    <div class="quotes">
        <div class="quotes__header">
            <DividerHorizontal class="divider" />
            <h1 class="h1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        </div>
        <MainQuote />
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.quotes {
    display: flex;
    flex-direction: column;
    background-color: $white-3;
    padding: 0 5rem;
    &__header {  
        margin-top: 6.3125rem;
        margin-bottom: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        &>.divider {
            margin-bottom: 1.125rem;
        }
    }

}
</style>