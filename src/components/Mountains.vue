<template>
    <Renderer ref="renderer" resize="window">
        <Camera ref="camera" :position="cameraPosition" :lookAt="cameraLookAt" />
        <Scene background="#000000" ref="scene">
            <AmbientLight/>
            <Plane :width="3" :height="2">
                <StandardMaterial>
                    <Texture src="./assets/textures/pyrenees.jpg" />
                </StandardMaterial>
            </Plane>
        </Scene>
    </Renderer>
</template>

<script>
export default {
    data() {
        return {
            cameraPosition: { x: 0.027586836562797, y: 0.01034348416715881, z: 1.999782982921512 },
            cameraLookAt: { x: 0, y: 0, z: 0 },
        };
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;
        this.camera = this.$refs.camera.camera;

        this.renderer.onBeforeRender(() => {
            this.update();
        });
    },
    methods: {
        update() {},
    },
};
</script>
