<template>
    <Renderer
        ref="renderer"
        resize="window"
        orbitCtrl
    >
        <Camera ref="camera" :position="cameraPosition" :lookAt="cameraLookAt" />
        <Scene background="#000000" ref="scene" >
            <Loader
                ref="loader"
                :payload="{
                    blenderSceneName: 'mountains',
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
            cameraPosition: {x: -754.2504116685178, y: 209.99329308090537, z: -182.28836504582245}, 
            cameraLookAt: {x: 0, y: 0, z: 0, },
        }
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;
        this.camera = this.$refs.camera.camera;

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
            console.log(this.camera.position);
            // if(this.gltf){}
                // this.gltf.children.filter(child => child.name === "Flights")[0].rotation.z += 0.1
        },
    },
};
</script>
