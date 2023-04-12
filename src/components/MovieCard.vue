<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieCard',
    props:{
        title: {
            type: String,
        },
        image: {
            type: String,
        },
    },
})

</script>

<template>
    <v-card class="mx-auto" max-width="344">
        <v-img :src=image height="200px" cover></v-img>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-actions>
            <v-btn color="orange">
                Explore
            </v-btn>
        </v-card-actions>
    </v-card>
</template>