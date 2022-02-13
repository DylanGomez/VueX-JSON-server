<template>
    <v-app>
        <header> </header>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: 'app',

    components: {
        Header,
    },
}
</script>
