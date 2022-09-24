<template>
    <div class="brand">
        <div class="brand__text">
            Product
        </div>
        <img class="brand__icon" src="@/assets/icons/logo/Logo.svg">
    </div>
</template>

<style scopes lang="scss">
    @import "@/assets/vars";
    .brand {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        &__text {
            font-size: 3.125rem;
            font-weight: 700;
            font-style: italic;
            text-transform: uppercase;
            color: $grey-2;
            margin-right: 0.5rem;
            margin-bottom: 0.25rem;
        }
    }

    @media only screen and (max-width: 768px) {
        .brand {
            &__text {
                font-size: 2rem;
            }
            &__icon {
                height: 4rem;
            }
        }
    } 
</style>