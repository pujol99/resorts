<template>
    <div>
        <div class="card-container card-top">
            <div class="card-title">
                <h1>{{ getLabel("about_title") }}</h1>
            </div>
            <div class="card-body">
                <p>{{ getLabel("about_body") }}</p>
            </div>
            <div class="card-action">
                
            </div>
        </div>
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
