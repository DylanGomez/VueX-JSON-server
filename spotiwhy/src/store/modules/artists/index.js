/* eslint-disable no-shadow, no-param-reassign */
import api from '@/api'
import { SET_ARTISTS, CLEAR_STATE } from '@/store/mutation-types'

const state = {
    artists: [],
    artist: {},

}

const getters = {
    artists: (state) => state.artists,
    getArtistById: (state) => (id) => state.artists.find((artist) => artist.id === id),
}

const actions = {
    getArtists({ commit, state }) {
        return api.getArtists()
            .then((artists) => {
                console.log('in artist')
                commit(SET_ARTISTS, artists)
                return state.artists
            })
            .catch((error) => console.warn('Error fetching artists', error))
    },
}

const mutations = {
    [SET_ARTISTS](state, artists) {
        state.artists = artists
    },

    [CLEAR_STATE](state) {
        state.artists = []
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
