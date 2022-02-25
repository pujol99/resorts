<template>
    <nav>
        <router-link to="/">Welcome</router-link>
        <router-link to="/about">About</router-link>
    </nav>
    <router-view />
</template>

<script>
export default {
    name: "App",
    mounted() {
        this.$store.dispatch("stages/onAppLoad");
    },
};
</script>
