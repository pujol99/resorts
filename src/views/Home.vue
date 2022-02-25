<template>
    <div>
        <div class="card-container card-top">
            <div class="card-title">
                <h1>{{ getLabel("welcome_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("welcome_body") }}</p>
            </div>
            <div class="card-action">
                
            </div>
        </div>
        <Scene/>
    </div>
</template>

<script>
import Scene from "../components/Scene.vue"
import { mapGetters } from "vuex";
export default {
    components: {
        Scene
    },
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>
