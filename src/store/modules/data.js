import { labels } from "./labels";

const state = () => ({
    languages: {
        ENG: 0,
        CAT: 1,
    },
    language: 0,
});

// getters
const getters = {
    //labels
    getLabel: state => label => {
        if (!labels[label]) return "No label";

        return labels[label][state.language];
    },
    getLanguage: state => {
        return Object.keys(state.languages).find(key => state.languages[key] === state.language);
    },
    //data
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
