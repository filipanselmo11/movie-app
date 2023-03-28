<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieAppBar',
})

</script>

<template>
    <v-app-bar color="orange">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
            Vuetify 3 Movie App
        </v-app-bar-title>
    </v-app-bar>
</template>