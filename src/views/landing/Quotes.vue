<script setup>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';
import MainQuote from '../../components/landing/MainQuote.vue';
import Quote from '../../components/landing/Quote.vue';

</script>

<template>
    <div class="quotes">
        <div class="quotes__header">
            <DividerHorizontal class="divider" />
            <h2 class="h2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        </div>
        <MainQuote class="quotes__main" />
        <div class="quotes__other">
            <Quote isMirrored />
            <Quote />
        </div>
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
    &__main {
        margin-bottom: 7.75rem;
    }
    &__other {
        display: flex;
    }
}

// more compact for smaller screens
@media only screen and (max-width: 1200px) {
    .quotes {
        padding: 0 1rem;
    }
}

// touch device
@media only screen and (max-width: 992px) {
    .quotes {
        background-color: $white-1;
        padding-left: 1rem;
        padding-right: 1rem;
        &__header {
            margin-top: 1.6875rem;
            margin-bottom: 2.75rem;
            &>.h2 {
                font-size: 1.5rem;
                line-height: 1.758rem;
            }
            &>.divider {
                margin-bottom: 1rem;
            }
        }
        &__other {
            flex-direction: column-reverse;
            &>* {
                margin-bottom: 1.625rem;
            }
        }
    }
}
</style>