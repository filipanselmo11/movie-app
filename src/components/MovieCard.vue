<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieCard'
})

</script>

<template>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
        <v-card-title>
            Movie Title
        </v-card-title>
        <v-card-actions>
            <v-btn color="orange">
                Explore
            </v-btn>
        </v-card-actions>
    </v-card>
</template>