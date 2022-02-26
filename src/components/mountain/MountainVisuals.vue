<template>
    <Renderer
        ref="renderer"
        resize="window"
    >
        <Camera :position="cameraPosition" :lookAt="cameraLookAt" />
        <Scene ref="scene" >
            <Loader
                ref="loader"
                :payload="{
                    blenderSceneName: `mountains/${$route.params.mountainName}`,
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex"
import {Fog, Color} from "three"
export default {
    data() {
        return {
            cameraPosition: {x: -754.2504116685178, y: 209.99329308090537, z: -182.28836504582245}, 
            cameraLookAt: {x: 0, y: 0, z: 0, },
            bgColor: "#000033"
        }
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;

        this.scene.scene.fog = new Fog(this.bgColor, 100, 1000);
        this.renderer.renderer.setClearColor(this.bgColor);

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
            // if(this.gltf)
            //     this.gltf.rotation.y += 0.001
        },
    },
};
</script>
