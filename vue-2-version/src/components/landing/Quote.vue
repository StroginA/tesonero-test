<script>
export default {
    props: {
        isMirrored: Boolean
    }
}
</script>

<template>
    <div class="quote" :class="{ 'quote_mirrored' : isMirrored }">
        <img class="quote__avatar" src="@/assets/icons/common/Avatar.png" alt="Avatar" />
        <div class="quote__body">
            <p class="quote__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                animi autem aliquid
            </p>
            <p class="quote__name">Jane Doe</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/vars";

.quote {
    display: flex;
    align-items: flex-start;

    &_mirrored {
        flex-direction: row-reverse;
    }

    &__avatar {
        display: block;
        width: 40%;
        margin-right: 1.5rem;
    }

    &__body {
        width: 60%;
    }

    &__text {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    &__name {
        line-height: 1.172rem;
        font-weight: 700;
    }
}

// touch device
@media only screen and (max-width: 992px) {
    .quote {
        flex-direction: row-reverse;
        &_mirrored {
            flex-direction: row;
        }
        &__avatar {
            width: 25%;
            margin-right: 1.5rem;
        }

        &__body {
            width: 75%;
        }
    }
}
</style>