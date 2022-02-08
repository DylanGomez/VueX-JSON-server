<template>
  <div>
    <div
      v-for="song in songs"
      :key="song.id"
    >
      <span>
        {{song.name}} - {{song.artist}}
      </span>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import { mapGetters } from 'vuex'

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
    HelloWorld,
  },

  created() {
    this.$store.dispatch('getSongs')
  },
}
</script>
