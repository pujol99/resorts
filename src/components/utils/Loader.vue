<template>
    <!-- <LoadingScreen ref="loadingScreen" /> -->
    <LoadBlender ref="blender" :sceneName="payload.blenderSceneName" />
</template>

<script>
export default {
    props: {
        payload: Object,
    },
};
</script>
