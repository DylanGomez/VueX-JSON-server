import Vue from 'vue'
import Vuex from 'vuex'

import songs from './modules/songs'
import artists from './modules/artists'
import playlists from './modules/playlists'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        songs,
        artists,
        playlists
    },
    plugins: [],
    strict: false,
})
