<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieExpansion',

})

</script>

<template>
    <v-expansion-panel>
        <v-expansion-panel-title>
            Movie Title
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            Movie Description
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
