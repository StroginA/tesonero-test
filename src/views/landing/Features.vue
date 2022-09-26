<script setup>
import { ref } from 'vue';
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';
import FeatureDropdown from '../../components/landing/FeatureDropdown.vue';

const features = ref([
    {
        id: 0,
        isActive: false,
        iconSrc: "/src/assets/icons/features_items/Device.svg",
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        id: 1,
        isActive: false,
        iconSrc: "/src/assets/icons/features_items/LED.svg",
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        id: 2,
        isActive: false,
        iconSrc: "/src/assets/icons/features_items/LightOff.svg",
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        id: 3,
        isActive: false,
        iconSrc: "/src/assets/icons/features_items/Splitter.svg",
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        id: 4,
        isActive: false,
        iconSrc: "/src/assets/icons/features_items/PowerOff.svg",
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
]);

const handleToggleDropdown = function(id) {
    for (let feature of features.value) {
        if (feature.id === id) {
            feature.isActive = !feature.isActive;
        } else {
            feature.isActive = false;
        }
    }
}

</script>

<template>
    <div class="features">
        <div class="features__header">
            <DividerHorizontal class="divider" />
            <h2 class="h2">Lorem ipsum, dolor sit adipisicing elit.</h2>
            <p class="features__subtitle">Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
        </div>
        <div class="features__main">
            <FeatureDropdown class="features__feature"
            v-for="feature in features"
            :key="feature.id"
            :id="feature.id"
            :iconSrc="feature.iconSrc"
            :title="feature.title"
            :body="feature.body"
            :isActive="feature.isActive"
            @toggle-dropdown="handleToggleDropdown" />
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
    &__feature {
        border-bottom: 1px solid $grey-1;
        &:last-child {
            border-bottom: unset;
        }
    }
}

// more compact for smaller screens
@media only screen and (max-width: 1200px) {
    .features {
        padding-left: 1rem;
        padding-right: 2rem;
    }
}

// touch device
@media only screen and (max-width: 992px) {
    .features {
        padding-left: 1rem;
        padding-right: 1rem;
        &__header {
            margin-top: 1.25rem;
            margin-bottom: 1.5rem;
            &>.h2 {
                font-size: 1.5rem;
                line-height: 1.758rem;
            }
            &>.divider {
                margin-bottom: 1rem;
            }
        }
    }
}
</style>