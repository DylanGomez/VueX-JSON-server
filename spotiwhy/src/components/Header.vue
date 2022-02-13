<template>
    <v-toolbar
        dark
        class="pa-3"
        min-height="10vh"
        max-height="10vh"
    >
        <v-toolbar-title class="mr-3">
            <div>
                <img
                    class="logo"
                    src="../assets/1563450760280.jpeg"
                    width="50px"
                />
            </div>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn @click="$router.push('/artists/')">
                Artists
            </v-btn>
            <v-btn @click="$router.push('/songs/')">
                Songs
            </v-btn>
            <v-btn @click="$router.push('/playlists/')">
                My playlists
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>

export default {
    name: 'header',

    data: () => ({
        drawer: false,
        group: null,
    }),

}
</script>
