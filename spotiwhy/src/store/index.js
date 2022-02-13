import Vue from 'vue'
import Vuex from 'vuex'

import songs from './modules/songs'
import artists from './modules/artists'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        songs,
        artists,
    },
    plugins: [],
    strict: false,
})
