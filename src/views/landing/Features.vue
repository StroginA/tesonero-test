<script>
import DividerHorizontal from '../../components/common/DividerHorizontal.vue';
import FeatureDropdown from '../../components/landing/FeatureDropdown.vue';
import deviceSrc from '@/assets/icons/features_items/Device.svg';
import ledSrc from '@/assets/icons/features_items/LED.svg';
import lightOffSrc from '@/assets/icons/features_items/LightOff.svg';
import splitterSrc from '@/assets/icons/features_items/Splitter.svg';
import powerOffSrc from '@/assets/icons/features_items/PowerOff.svg';


export default {
    components: { DividerHorizontal, FeatureDropdown },
    data() {
        return ({
            features: [
                {
                    id: 0,
                    isActive: false,
                    iconSrc: deviceSrc,
                    title: "Lorem ipsum, dolor sit amet adipisicing elit.",
                    body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
                },
                {
                    id: 1,
                    isActive: false,
                    iconSrc: ledSrc,
                    title: "Lorem ipsum, dolor sit amet adipisicing elit.",
                    body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
                },
                {
                    id: 2,
                    isActive: false,
                    iconSrc: lightOffSrc,
                    title: "Lorem ipsum, dolor sit amet adipisicing elit.",
                    body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
                },
                {
                    id: 3,
                    isActive: false,
                    iconSrc: splitterSrc,
                    title: "Lorem ipsum, dolor sit amet adipisicing elit.",
                    body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
                },
                {
                    id: 4,
                    isActive: false,
                    iconSrc: powerOffSrc,
                    title: "Lorem ipsum, dolor sit amet adipisicing elit.",
                    body: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
                },
            ]
        })
    },
    methods: {
        handleToggleDropdown: function (id) {
            for (let feature of this.features) {
                if (feature.id === id) {
                    feature.isActive = !feature.isActive;
                } else {
                    feature.isActive = false;
                }
            }
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
            <FeatureDropdown class="features__feature" v-for="feature in features" :key="feature.id" :id="feature.id"
                :iconSrc="feature.iconSrc" :title="feature.title" :body="feature.body" :isActive="feature.isActive"
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
    padding-top: 6.3125rem;

    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        padding: 1.25rem 1rem;

        &__header {
            margin-bottom: 1.5rem;

            &>.h2 {
                font-size: 1.5rem;
                line-height: 1.75rem;
            }

            &>.divider {
                margin-bottom: 1rem;
            }
        }
    }
}
</style>