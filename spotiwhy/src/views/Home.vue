<template>
    <div>
        <songs></songs>
        <artists></artists>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Songs from './Songs.vue'
import Artists from './Artists.vue'

export default {
    name: 'home',

    components: {
        Songs,
        Artists,
    },

    data() {
        return {
            searchInput: '',
        }
    },

    computed: {
        ...mapGetters([
            'songs',
        ]),

        allSongs() {
            return this.songs
        },
    },

    created() {
        this.$store.dispatch('getSongs')
    },
}
</script>
