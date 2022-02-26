<template>
    <div class="info">
        <h2>{{name}}</h2>
        <h6>{{info.height}}</h6>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data() {
        return {
            name: this.$route.params.mountainName,
            info: {}
        }
    },
    mounted() {
        this.info = this.getMountain(this.name)
    },
    computed: {
        ...mapGetters({ getMountain: "data/getMountain" }),
    },
}
</script>