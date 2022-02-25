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
        <Mountain/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            getLabel: "data/getLabel",
        }),
    },
};
</script>
