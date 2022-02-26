import { labels } from "./labels";
import { mountains } from "./mountains";

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
    getMountain: state => mountain => {
        if (!mountains[mountain]) return "No mountain";

        return mountains[mountain];
    }
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
