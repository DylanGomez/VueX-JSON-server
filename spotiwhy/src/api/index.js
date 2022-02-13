import Vue from 'vue'

const basePath = "http://localhost:3000"

// API methods start here
function getSongs() {
    return Vue.prototype.$axios.get(
        `${basePath}/songs`,
    ).then(response => (response.data))
}

function getArtists() {
    return Vue.prototype.$axios.get(
        `${basePath}/artists`,
    ).then(response => (response.data))
}

function getArtistsById(id) {
    return Vue.prototype.$axios.get(
        `${basePath}/artists?id=${id}`,
    ).then(response => (response.data))
}


function GetSongsForArtist(artistName) {
    return Vue.prototype.$axios.get(
        `${basePath}/songs?artist=${artistName}`,
    ).then(response => (response.data))
}


export default {
    getSongs,
    getArtists,
    getArtistsById,
    GetSongsForArtist,
}
