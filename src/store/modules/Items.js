import {supabaseApiClient} from "../supabaseApiClient";
const state =  {
    items: "",
}

const getters = {
    items: (state) => state.items,
}
  
const actions = {
    async getItems({ commit }){
        var supabase = await supabaseApiClient.getSupabaseApiClient();
        const response = await supabase.from('items').select('*');
        commit('setItems', response.data);
    },
    resetItemsState({ commit }){
        commit('resetItemsState');
    }
}

const mutations = {
    setItems: (state, itemsData) => state.items = itemsData,
    resetItemsState: (state) => state.items = "",
}

export default {
    state,
    actions,
    mutations,
    getters
}