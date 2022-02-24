<template>
    <Renderer
        ref="renderer"
        resize="window"
    >
        <Camera :position="cameraPosition" :lookAt="cameraLookAt" />
        <Scene background="#000000" ref="scene" >
            <Loader
                ref="loader"
                :payload="{
                    blenderSceneName: 'scene1',
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data() {
        return {
            cameraPosition: {x: 2, y: 1, z: 2, }, 
            cameraLookAt: {x: 0, y: 0, z: 0, },
        }
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;

        this.$store.commit("stages/setScene", this.scene);
        this.$store.commit("stages/setRenderer", this.renderer);

        this.renderer.onBeforeRender(() => {
            this.update();
        });
    },
    computed: {
        ...mapGetters({ gltf: "stages/getGLTF" }),
    },
    methods: {
        update() {
            if(this.gltf)
                this.gltf.children.filter(child => child.name === "Flights")[0].rotation.z += 0.1
        },
    },
};
</script>
