import Vue from "vue";
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from "secure-ls";
const ls = new SecureLS({ encodingType: 'aes' });
import modules from './modules/autoloadModules';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key)
        }
    })],
    modules
});