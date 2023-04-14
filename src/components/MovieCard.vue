<script lang="ts">

import { defineComponent } from 'vue';
import MovieDialog from './MovieDialog.vue';
export default defineComponent({
    name: "MovieCard",
    props: {
        title: {
            type: String,
        },
        image: {
            type: String,
        },
        sinopse: {
            type: String,
        },
    },
    components: { MovieDialog }
})

</script>

<template>
    <v-card class="mx-auto" max-width="344">
        <v-img :src=image height="200px" cover></v-img>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-actions>
            <MovieDialog :title="title" :sinopse="sinopse"/>
        </v-card-actions>
    </v-card>
</template>