<template>
    <div class="overflow-y-hidden" ref="container">
        <h2 class="text-[7vmin] text-white font-bogart overflow-y-hidden opacity-0" ref="appear">
            {{ text }}
        </h2>
    </div>
</template>

<script>

export default {
    name: "popupText",
    props: {
        text: {
            type: String,
            default: "Section Text"
        },
        direction: {
            type: String,
            default: 'N'
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    mounted() {

        this.$gsap.set(
            this.$refs['appear'],
            {
                x: this.direction == 'W' ? this.$refs['appear'].offsetWidth : this.direction == 'E' ? -this.$refs['appear'].offsetWidth : 0,
                y: this.direction == 'N' ? this.$refs['appear'].offsetHeight : this.direction == 'S' ? -this.$refs['appear'].offsetHeight : 0
            }
        )

    },
    watch: {
        show(new_value, old_value){
            if (new_value){
                this.$gsap.set(
                    this.$refs['appear'],
                    {alpha: 1}
                )
                this.appear()
            }
        }
    },
    methods: {
        appear() {
            this.$gsap.to(
                this.$refs['appear'],
                {
                    y: 0,
                    x: 0,
                    ease: "power1.inOut"
                }
            )
        }
    }
}

</script>
