/* eslint-disable no-shadow, no-param-reassign */
import api from '@/api'
import { SET_SONGS, CLEAR_STATE } from '@/store/mutation-types'

const state = {
    songs: [],
}

const getters = {
    songs: state => state.songs,
    getSongById: state => id => state.songs.find(song => song.id === id),
}

const actions = {
    getSongs({ commit, state }) {
        return api.getSongs()
            .then((songs) => {
                console.log('in')
                commit(SET_SONGS, songs)
                return state.songs
            })
            .catch(error => console.warn('Error fetching songs', error))
    },
}

const mutations = {
    [SET_SONGS](state, songs) {
        state.songs = songs
    },

    [CLEAR_STATE](state) {
        state.songs = []
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
