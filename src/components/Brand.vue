<template>
    <div class="brand">
        <div class="brand__text">
            Product
        </div>
        <div class="brand__icon">
            <img src="@/assets/icons/logo/Logo.svg">
        </div>
    </div>
</template>

<style scopes lang="scss">
    @import "@/assets/vars";
    .brand {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        &__text {
            font-size: 3.125rem;
            font-weight: 700;
            font-style: italic;
            text-transform: uppercase;
            color: $grey-2;
            margin-right: 0.5rem;
        }
    }
</style>