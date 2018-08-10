import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isConnected: false,
        error: '',
        message: '',
        users: [
            { name: '', retitle: '' },
            { name: '', retitle: '' },
            { name: '', retitle: '' },
            { name: '', retitle: '' }
        ]
    },
    mutations: {
        SOCKET_CONNECTED(state) {
            isConnected = true;
        },
        SOCKET_DISCONNECTED(state) {
            isConnected = false;
        },
        SOCKET_MESSAGE(state, message) {
            isConnected = true;
        },
        SOCKET_HELLO_WORLD(state, message) {
            state.message = message
        },
        SOCKET_ERROR(state, message) {
            state.error = message.error
        },
    }
});

