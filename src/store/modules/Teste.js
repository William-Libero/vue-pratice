import axios from "axios";

const state =  {
    translatedText: "",
}

const getters = {
    translatedText: (state) => state.translatedText,
}
  
const actions = {
    async translate({ commit }, params){
        const response = await axios.get(SERVE + `/dictionary/translate?sourceLang=${params.sourceLanguage}&targetLang=${params.targetLanguage}&sourceText=${params.sourceText}`, 
                                        await firebaseAuthToken.getFirebaseAuthToken());
        commit('setTranslatedText', response.data.data.translations[0].translatedText);
    },
    resetTranslatedTextState({ commit }){
        commit('resetTranslatedTextState');
    }
}

const mutations = {
    setTranslatedText: (state, translatedTextData) => state.translatedText = translatedTextData,
    resetTranslatedTextState: (state) => state.translatedText = "",
}

export default {
    state,
    actions,
    mutations,
    getters
}