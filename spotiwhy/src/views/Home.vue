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

    components: {
        Songs,
        Artists,
    },

    created() {
        this.$store.dispatch('getSongs')
    },
}
</script>
