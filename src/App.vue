<template>
    <Welcome />
</template>

<script>
import Welcome from "./views/Welcome.vue";

export default {
    name: "App",
    components: {
        Welcome,
    },
    mounted() {
        this.$store.dispatch("stages/onAppLoad")
    },
};
</script>
