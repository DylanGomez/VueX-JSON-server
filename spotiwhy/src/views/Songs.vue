<template>
  <song-table :songs="allSongs" />
</template>

<script>
import { mapGetters } from 'vuex'
import SongTable from '../components/SongTable.vue'

export default {
  name: 'songs',

  components: {
    SongTable
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
