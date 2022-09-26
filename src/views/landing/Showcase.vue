<script setup>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';

</script>

<template>
    <div class="showcase">
        <div class="showcase__header">
            <DividerHorizontal class="divider" />
            <h1 class="h1">Lorem ipsum, dolor sit amet consectetur</h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.showcase {
    background: linear-gradient(111.04deg, #E2E2E2 0.39%, rgba(255, 255, 255, 0) 86.46%);
    display: flex;
    flex-direction: column;
    padding-top: 4.6875rem;

    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;    
        text-transform: uppercase;
        &>.divider {
            margin-bottom: 1.375rem;
        }
    }
}

// touch device
@media only screen and (max-width: 992px) {
    .showcase {
        background: 0;
        padding-top: 4rem;
        padding-bottom: 5rem;
        &__header {
            &>.h1 {
                font-size: 1.5rem;
                line-height: 1.75rem;
            }
            &>.divider {
                display: none;
            }
        }
    }
}
</style>