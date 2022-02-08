import Vue from 'vue'

const basePath = "http://localhost:3000"

// API methods start here
function getSongs() {
    return Vue.prototype.$axios.get(
        `${basePath}/songs`,
    ).then(response => (response.data))
}

export default {
    getSongs
}
